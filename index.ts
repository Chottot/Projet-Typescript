import {Pokemon} from "./src/pokemon";
import {Battle} from "./src/battle";

const p1 = new Pokemon("pika", {
    hp: 60,
    attack: 45,
    defense: 50,
    speAttack: 80,
    speDefense: 80,
    speed: 60
});

const p2 = new Pokemon("cara", {
    hp: 60,
    attack: 45,
    defense: 50,
    speAttack: 80,
    speDefense: 80,
    speed: 70
});

console.log(p1);
console.log(p2);

const battle = new Battle();

battle.initBattle( [p1, p2]);

battle.prepareNextTurn();

console.log( battle.getNextPokemonToMove());