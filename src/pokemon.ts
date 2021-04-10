import {PokemonMove} from "./pokemonMove";

const maxIndividualStat: number = 32;

interface PokemonStat{

    hp: number;
    attack: number;
    defense: number;
    speAttack: number;
    speDefense: number;
    speed: number;

}

export interface IPokemon{
    name: string;
}


export class Pokemon implements PokemonStat{

    pokemonName: string;
    name: string;
    level: number;

    hp: number;
    attack: number;
    defense: number;
    speAttack: number;
    speDefense: number;
    speed: number;

    baseStat: PokemonStat;
    individualStat: PokemonStat;
    expStat: PokemonStat;
    natureStat: PokemonStat;

    moves: PokemonMove[];

    constructor(name: string, pokemonName: string, baseStat: PokemonStat, individualStat?: PokemonStat, expStat?: PokemonStat, natureStat?: PokemonStat) {
        this.name = name;
        this.pokemonName = pokemonName;
        this.baseStat = baseStat;
        this.hp = 0;
        this.attack = 0;
        this.defense = 0;
        this.speAttack = 0;
        this.speDefense = 0;
        this.speed = 0;
        this.level = 0;

        if( individualStat !== undefined) {
            this.individualStat = individualStat;
        }else{
            this.individualStat = {
                hp: Math.random()*maxIndividualStat,
                attack: Math.random()*maxIndividualStat,
                defense: Math.random()*maxIndividualStat,
                speAttack: Math.random()*maxIndividualStat,
                speDefense: Math.random()*maxIndividualStat,
                speed: Math.random()*maxIndividualStat,
            }
        }

        if( expStat !== undefined) {
            this.expStat = expStat;
        }else{
            this.expStat = {
                hp: 0,
                attack: 0,
                defense: 0,
                speAttack: 0,
                speDefense: 0,
                speed: 0,
            }
        }

        if( natureStat !== undefined) {
            this.natureStat = natureStat;
        }else{
            this.natureStat = {
                hp: 1,
                attack: 1,
                defense: 1,
                speAttack: 1,
                speDefense: 1,
                speed: 1,
            }
        }

        this.moves = [];

        this.setLevel(1);
    }

    setLevel( level: number): void{
        this.level = level;

        this.attack = Math.floor( Math.floor((2 * this.baseStat.attack + this.individualStat.attack + this.expStat.attack) * level / 100 + 5)* this.natureStat.attack );
        this.defense = Math.floor( Math.floor((2 * this.baseStat.defense + this.individualStat.defense + this.expStat.defense) * level / 100 + 5)* this.natureStat.defense );
        this.speAttack = Math.floor( Math.floor((2 * this.baseStat.speAttack + this.individualStat.speAttack + this.expStat.speAttack) * level / 100 + 5)* this.natureStat.speAttack );
        this.speDefense = Math.floor( Math.floor((2 * this.baseStat.speDefense + this.individualStat.speDefense + this.expStat.speDefense) * level / 100 + 5)* this.natureStat.speDefense );
        this.speed = Math.floor( Math.floor((2 * this.baseStat.speed + this.individualStat.speed + this.expStat.speed) * level / 100 + 5)* this.natureStat.speed );

        this.hp = Math.floor( (2 * this.baseStat.hp + this.individualStat.hp + this.expStat.hp) * level / 100 + level + 10 );
    }

    addMove(move: PokemonMove): void{
        if( this.moves.length<4)
            this.moves.push(move);
    }

    levelUp(): void{
        this.setLevel( this.level +1);
    }

    getNextMove(): PokemonMove{
        return this.moves[ Math.random() * this.moves.length];
    }

    choiceTarget(pokemons: Pokemon[]): Pokemon{
        return pokemons[ Math.random() * pokemons.length];
    }

}



