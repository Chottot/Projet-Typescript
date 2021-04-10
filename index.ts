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

test()


