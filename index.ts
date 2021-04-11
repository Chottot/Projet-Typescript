import { getPokemonFromApi, Pokemon} from "./src/pokemon";
import {Battle} from "./src/battle";
import get = Reflect.get;
import {getPokemonType, PokemonType} from "./src/PokemonType";
import {getNature, getRandomNature, PokemonNature} from "./src/pokemonNature";
import {PokemonMove} from "./src/pokemonMove";
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

async function test() {

    let test = await P.getMoveByName("pound");
    console.log(test);
}

//test()

const p1: Pokemon = new Pokemon( {
    name: "pika",
    pokemonName: "pikachu",
    type1: new PokemonType("default", "none",{} ),
    nature: new PokemonNature("null", null, null),
    baseStat: {
        hp: 60,
        attack: 45,
        defense: 50,
        speAttack: 80,
        speDefense: 80,
        speed: 70
    }
});
const p2: Pokemon = new Pokemon( {
    name: "cara",
    pokemonName: "carapuce",
    type1: new PokemonType("default","none", {} ),
    nature: new PokemonNature("null", null, null),
    baseStat: {
        hp: 60,
        attack: 45,
        defense: 50,
        speAttack: 80,
        speDefense: 80,
        speed: 70
    }
});
p2.evasionStatStage = 3;
const move =  new PokemonMove("", 100, 50, 15, 0,new PokemonType("", "", {}));
const nb = 1000;
let nbHit = 0;
const expectedNbHit = 40;

for (let i = 0; i <nb ; i++) {
    if(p1.doesItHit(move, p2)){
        nbHit += 1;
    }
}
console.log(nbHit);
const error = Math.abs( expectedNbHit - nbHit )

