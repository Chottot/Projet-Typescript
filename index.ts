import {Pokemon} from "./src/pokemon";
import {Battle} from "./src/battle";

const p1 = new Pokemon("pika", 10);
const p2 = new Pokemon("cara", 20);
let p3: Pokemon;

const battle = new Battle();
battle.initBattle( [p1, p2]);


for (let i = 0; i < 10; i++) {
    p3 =  battle.nextTurn();
    console.log( p3 );
    p3.play();
}

