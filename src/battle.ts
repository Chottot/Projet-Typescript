import {Pokemon } from "./pokemon";
import {PokemonMove} from "./pokemonMove";


interface pokemonBattleMove{
    pokemon: Pokemon;
    move: PokemonMove | undefined;
    targets: Array<Pokemon>;
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
                move: undefined,
                targets: []
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
            }else if (p2.pokemon.stageStat.speed === p1.pokemon.stageStat.speed ){
                return p2.pokemon.stageStat.speed - p1.pokemon.stageStat.speed;
            }else if( Math.random() > 0.5){
                return -1;
            }else{
                return  1;
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
            const battleMove: pokemonBattleMove = this.pokemons[this.pokemonToMove];

            for (let i = 0; i < battleMove.targets.length; i++) {



            }

            this.pokemonToMove += 1;
        }
    }

}