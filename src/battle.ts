import {Pokemon} from "./pokemon";


export class Battle{

    pokemons: Array<Pokemon> = [];

    constructor() {
    }

    initBattle(pokemons: Array<Pokemon>){
        this.pokemons = pokemons;

    }

    nextTurn(): Pokemon{
        let pokemon;

        while( pokemon == undefined) {

            for (let i = 0; i < this.pokemons.length; i++) {
                pokemon = this.pokemons[i];
                pokemon.nextTurn();

                if ( pokemon.isTurn()) {
                    break;
                }else{
                    pokemon = undefined;
                }
            }

        }

        return pokemon;

    }

}