import {PokemonMove} from "./pokemonMove";
import {PokemonNature, pokemonNatureToStat} from "./pokemonNature";
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const maxIndividualStat: number = 32;

export interface PokemonStat{

    hp: number;
    attack: number;
    defense: number;
    speAttack: number;
    speDefense: number;
    speed: number;

}

interface PokemonStatList{
    baseStat: PokemonStat;
    effortStat?: PokemonStat;
    individualStat?: PokemonStat;
    natureStat?: PokemonStat;
}

export interface IPokemon{
    name: string;
}

export async function getPokemonFromApi(name: string, pokemonName: string){
    const data = await P.getPokemonByName(pokemonName);

    return new Pokemon(name, pokemonName,
        {
            baseStat: {
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speAttack: data.stats[3].base_stat,
                speDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat
            },
            effortStat: {
                hp: data.stats[0].effort,
                attack: data.stats[1].effort,
                defense: data.stats[2].effort,
                speAttack: data.stats[3].effort,
                speDefense: data.stats[4].effort,
                speed: data.stats[5].effort
            }
        }
    );

}


export class Pokemon implements PokemonStat{

    pokemonName: string;
    name: string;
    nature: PokemonNature;

    level: number;

    hp: number;
    attack: number;
    defense: number;
    speAttack: number;
    speDefense: number;
    speed: number;

    private baseStat: PokemonStat;
    private individualStat: PokemonStat;
    expStat: PokemonStat;
    natureStat: PokemonStat;

    moves: PokemonMove[];

    constructor(name: string, pokemonName: string, stats: PokemonStatList, nature?: PokemonNature) {
        this.name = name;
        this.pokemonName = pokemonName;
        this.baseStat = stats.baseStat;
        this.hp = 0;
        this.attack = 0;
        this.defense = 0;
        this.speAttack = 0;
        this.speDefense = 0;
        this.speed = 0;
        this.level = 0;

        if( stats.individualStat !== undefined) {
            this.individualStat = stats.individualStat;
        }else{
            this.individualStat = {
                hp: Math.random()*maxIndividualStat,
                attack: Math.random()*maxIndividualStat,
                defense: Math.random()*maxIndividualStat,
                speAttack: Math.random()*maxIndividualStat,
                speDefense: Math.random()*maxIndividualStat,
                speed: Math.random()*maxIndividualStat,
            }
        }

        if( stats.effortStat !== undefined) {
            this.expStat = stats.effortStat;
        }else{
            this.expStat = {
                hp: 0,
                attack: 0,
                defense: 0,
                speAttack: 0,
                speDefense: 0,
                speed: 0,
            }
        }

        if( stats.natureStat !== undefined) {
            this.natureStat = stats.natureStat;
            this.nature = new PokemonNature('personalized', "", "");
        }else if (nature !== undefined){
            this.nature = nature;
            this.natureStat = pokemonNatureToStat(nature);
        }else{
            this.nature = new PokemonNature('default', "", "");
            this.natureStat = {
                hp: 1,
                attack: 1,
                defense: 1,
                speAttack: 1,
                speDefense: 1,
                speed: 1,
            }
        }

        this.moves = [];

        this.setLevel(1);
    }

    setLevel( level: number): void{
        this.level = level;

        this.attack = Math.floor( Math.floor((2 * this.baseStat.attack + this.individualStat.attack + this.expStat.attack) * level / 100 + 5)* this.natureStat.attack );
        this.defense = Math.floor( Math.floor((2 * this.baseStat.defense + this.individualStat.defense + this.expStat.defense) * level / 100 + 5)* this.natureStat.defense );
        this.speAttack = Math.floor( Math.floor((2 * this.baseStat.speAttack + this.individualStat.speAttack + this.expStat.speAttack) * level / 100 + 5)* this.natureStat.speAttack );
        this.speDefense = Math.floor( Math.floor((2 * this.baseStat.speDefense + this.individualStat.speDefense + this.expStat.speDefense) * level / 100 + 5)* this.natureStat.speDefense );
        this.speed = Math.floor( Math.floor((2 * this.baseStat.speed + this.individualStat.speed + this.expStat.speed) * level / 100 + 5)* this.natureStat.speed );

        this.hp = Math.floor( (2 * this.baseStat.hp + this.individualStat.hp + this.expStat.hp) * level / 100 + level + 10 );
    }

    addMove(move: PokemonMove): void{
        if( this.moves.length<4)
            this.moves.push(move);
    }

    levelUp(): void{
        this.setLevel( this.level +1);
    }

    getNextMove(): PokemonMove{
        return this.moves[ Math.random() * this.moves.length];
    }

    choiceTarget(pokemons: Pokemon[]): Pokemon{
        return pokemons[ Math.random() * pokemons.length];
    }

}



