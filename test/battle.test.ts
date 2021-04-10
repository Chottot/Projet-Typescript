import {Battle} from "../src/battle";


test( "battle cara should play first ", function (){
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
    const battle = new Battle();

    battle.initBattle( [p1, p2]);

    battle.prepareNextTurn();

    expect( battle.getNextPokemonToMove() ).toBe( p2);

});