import {Pokemon} from "../src/pokemon";
import {Battle} from "../src/battle";

test( "battle1 ", function (){
    const p1 = new Pokemon("pika", 10);
    const p2 = new Pokemon("cara", 20);
    const battle = new Battle();
    battle.initBattle( [p1, p2]);
    expect( battle.nextTurn()).toBe( p2);
});