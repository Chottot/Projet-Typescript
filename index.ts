import { getPokemonFromApi, Pokemon} from "./src/pokemon";
import {Battle} from "./src/battle";
import get = Reflect.get;
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();


async function test() {

    const test = await getPokemonFromApi("test", "eevee");
    console.log(test);
}

test()



