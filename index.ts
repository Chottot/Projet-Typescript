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
    level: 10,
    baseStat: {
        hp: 60,
        attack: 45,
        defense: 50,
        speAttack: 80,
        speDefense: 80,
        speed: 70
    },
    individualStat:{
        hp: 15,
        attack: 15,
        defense: 15,
        speAttack: 15,
        speDefense: 15,
        speed: 15
    }
});
console.log(p1);

