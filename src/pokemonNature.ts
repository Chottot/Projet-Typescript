import {PokemonStat} from "./pokemon";

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

let natures = null;

export class PokemonNature{
    name: string;
    decreasedStat: string | null;
    increasedStat: string | null;

    constructor(name: string, decreasedStat: string | null, increasedStat: string |null) {
        this.name = name;
        this.decreasedStat = decreasedStat;
        this.increasedStat = increasedStat;
    }
}

export function pokemonNatureToStat(nature: PokemonNature): PokemonStat{
    return {
        hp: (nature.increasedStat === 'hp'? 1.1 : 1) * ( nature.decreasedStat === 'hp'? 0.9 : 1 ),
        attack: (nature.increasedStat === 'attack'? 1.1 : 1) * ( nature.decreasedStat === 'attack'? 0.9 : 1 ),
        defense: (nature.increasedStat === 'defense'? 1.1 : 1) * ( nature.decreasedStat === 'defense'? 0.9 : 1 ),
        speAttack: (nature.increasedStat === 'special-attack'? 1.1 : 1) * ( nature.decreasedStat === 'special-attack'? 0.9 : 1 ),
        speDefense: (nature.increasedStat === 'special-defense'? 1.1 : 1) * ( nature.decreasedStat === 'special-defense'? 0.9 : 1 ),
        speed: (nature.increasedStat === 'speed'? 1.1 : 1) * ( nature.decreasedStat === 'speed'? 0.9 : 1 )
    }
}

export async function getNature(name: string){
    const data = P.getNatureByName(name);
    return new PokemonNature(name, data.decreased_stat.name, data.increased_stat.name)
}

export async function getRandomNature(){
    const list = P.getNatureList();
    return await getNature(  list.results[ Math.random() * list.count ] );
}
