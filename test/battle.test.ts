import {Pokemon} from "../src/pokemon";
import {Battle} from "../src/battle";

test( "battle cara should play ", function (){
    const p1 = new Pokemon("pika", 10);
    const p2 = new Pokemon("cara", 20);
    const battle = new Battle();
    battle.initBattle( [p1, p2]);
    expect( battle.nextTurn()).toBe( p2);
});

test( "cara should play twice more with twice speed", function (){
    const nbTurn = 10;
    const p1 = new Pokemon("pika", 10);
    const p2 = new Pokemon("cara", 20);
    let p3;
    const battle = new Battle();
    let p1nb = 0, p2nb = 0;

    battle.initBattle( [p1, p2]);

    for (let i = 0; i < nbTurn; i++) {
        p3 = battle.nextTurn();
        if( p3  === p1 ){
            p1nb += 1;
        }else if( p3 === p2 ){
            p2nb += 1;
        }
        //console.log(p3);
        p3.play();
    }

    let error = nbTurn*( p2.speed/ (p1.speed +  p2.speed) ) - p2nb;
    expect( error).toBeLessThan( 1 ); //
});

test( "cara should play the same with the same speed ", function (){
    const nbTurn = 10;
    const p1 = new Pokemon("pika", 15);
    const p2 = new Pokemon("cara", 15);
    let p3;
    const battle = new Battle();
    let p1nb = 0, p2nb = 0;

    battle.initBattle( [p1, p2]);

    for (let i = 0; i < nbTurn; i++) {
        p3 = battle.nextTurn();
        if( p3  === p1 ){
            p1nb += 1;
        }else if( p3 === p2 ){
            p2nb += 1;
        }
        console.log(p3);
        p3.play();
    }

    let error = nbTurn*( p2.speed/ (p1.speed +  p2.speed) ) - p2nb;
    expect( error).toBeLessThanOrEqual( 1 );
});