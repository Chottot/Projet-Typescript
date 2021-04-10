import {Pokemon } from "./pokemon";
import {PokemonMove} from "./pokemonMove";


interface pokemonBattleMove{
    pokemon: Pokemon;
    move: PokemonMove | undefined;
}

export class Battle{

    pokemonToMove: number = -1;
    pokemons: Array<pokemonBattleMove> = [];

    constructor() {

    }

    initBattle(pokemons: Array<Pokemon>){
        for (let i = 0; i < pokemons.length; i++) {
            this.pokemons[i] = {
                 pokemon: pokemons[i],
                 move: undefined
            }
        }
    }

    prepareNextTurn(): void{
        for (let i = 0; i < this.pokemons.length; i++) {
            this.pokemons[i].move = this.pokemons[i].pokemon.getNextMove();
            console.log(this.pokemons[i].move);
        }

        this.pokemons = this.pokemons.sort( function (p1, p2){
            if( p1.move &&  p2.move && (p2.move.priority !== p1.move.priority ) ){
                return p2.move.priority - p1.move.priority;
            }else{
                return p2.pokemon.stats.speed - p1.pokemon.stats.speed;
            }

        });

        this.pokemonToMove = 0;
    }

    getNextPokemonToMove(): Pokemon | null {
        if( this.pokemonToMove < 0 || this.pokemonToMove >= this.pokemons.length ){
            return null;
        }else {
            return this.pokemons[this.pokemonToMove].pokemon;
        }
    }

    stepTurn(): void{

        if( this.pokemonToMove >= 0 && this.pokemonToMove < this.pokemons.length ) {
            const pokemon: pokemonBattleMove = this.pokemons[this.pokemonToMove];
            this.pokemonToMove += 1;
        }
    }

}