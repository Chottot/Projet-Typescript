import {Battle} from "../src/battle";
import {Pokemon} from "../src/pokemon";
import {PokemonType} from "../src/PokemonType";
import {PokemonNature} from "../src/pokemonNature";

test( "battle cara should play first ", function (){
    const p1 = new Pokemon( {
        name:"pika",
        pokemonName:"pikachu",
        type1: new PokemonType("default", {} ),
        nature: new PokemonNature("null", null, null),
        baseStat: {
            hp: 60,
            attack: 45,
            defense: 50,
            speAttack: 80,
            speDefense: 80,
            speed: 10
        }
    });
    const p2 = new Pokemon({
        name:"cara",
        pokemonName:"carapuce",
        type1: new PokemonType("default", {} ),
        nature: new PokemonNature("null", null, null),
        baseStat: {
            hp: 60,
            attack: 45,
            defense: 50,
            speAttack: 80,
            speDefense: 80,
            speed: 70
        }
    });
    const battle = new Battle();

    battle.initBattle( [p1, p2]);

    battle.prepareNextTurn();

    expect( battle.getNextPokemonToMove() ).toBe( p2);

});