import {Pokemon} from "./src/pokemon";
import {Battle} from "./src/battle";
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

P.getPokemonByName('eevee') // with Promise
    .then(function(response: any) {
        console.log(response.stats);
    })
    .catch(function(error: any) {
        console.log('There was an ERROR: ', error);
    });


