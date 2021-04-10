import { getPokemonFromApi, Pokemon} from "./src/pokemon";
import {Battle} from "./src/battle";
import get = Reflect.get;
import {getPokemonType} from "./src/PokemonType";
import {getNature, getRandomNature} from "./src/pokemonNature";
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

async function test() {

    let test = await getPokemonFromApi("pika", "pikachu");
    console.log(test);
}

test()



