import {PokemonMove} from "./pokemonMove";
import {getRandomNature, PokemonNature, pokemonNatureToStat} from "./pokemonNature";
import {getPokemonType, PokemonType} from "./PokemonType";
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const maxIndividualStat: number = 32;

export interface PokemonStat{

    hp: number;
    attack: number;
    defense: number;
    speAttack: number;
    speDefense: number;
    speed: number;

}

export interface IPokemonInitializer{
    pokemonName: string;
    name: string;

    nature: PokemonNature;

    type1: PokemonType;
    type2?: PokemonType;

    level?: number;

    baseStat: PokemonStat;
    individualStat?: PokemonStat;
    effortStat?: PokemonStat;
    natureStat?: PokemonStat;

    moves?: PokemonMove[];
}

export async function getPokemonFromApi(name: string, pokemonName: string){
    const data = await P.getPokemonByName(pokemonName);

    return new Pokemon(
        {
            name,
            pokemonName,
            type1: await getPokemonType( data.types[0].type.name ),
            type2: data.types[1]? await getPokemonType( data.types[0].type.name ): undefined,
            nature: await getRandomNature(),
            baseStat: {
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speAttack: data.stats[3].base_stat,
                speDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat
            },
            effortStat: {
                hp: data.stats[0].effort,
                attack: data.stats[1].effort,
                defense: data.stats[2].effort,
                speAttack: data.stats[3].effort,
                speDefense: data.stats[4].effort,
                speed: data.stats[5].effort
            }
        }

    );

}


export class Pokemon {
    pokemonName: string;
    name: string;
    nature: PokemonNature;
    type1: PokemonType;
    type2: PokemonType | undefined;

    level: number;

    hp: number;
    attack: number;
    defense: number;
    speAttack: number;
    speDefense: number;
    speed: number;

    private baseStat: PokemonStat;
    private individualStat: PokemonStat;
    effortStat: PokemonStat;
    natureStat: PokemonStat;

    moves: PokemonMove[];

    constructor(args: IPokemonInitializer) {
        this.name = args.name;
        this.pokemonName = args.pokemonName;
        this.baseStat = args.baseStat;
        this.hp = 0;
        this.attack = 0;
        this.defense = 0;
        this.speAttack = 0;
        this.speDefense = 0;
        this.speed = 0;
        this.level = 0;

        this.type1 = args.type1;
        this.type2 = args.type2;

        if( args.individualStat !== undefined) {
            this.individualStat = args.individualStat;
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

        if( args.effortStat !== undefined) {
            this.effortStat = args.effortStat;
        }else{
            this.effortStat = {
                hp: 0,
                attack: 0,
                defense: 0,
                speAttack: 0,
                speDefense: 0,
                speed: 0,
            }
        }

        if( args.natureStat !== undefined) {
            this.natureStat = args.natureStat;
            this.nature = new PokemonNature('personalized', "", "");
        }else if (args.nature !== undefined){
            this.nature = args.nature;
            this.natureStat = pokemonNatureToStat(args.nature);
        }else{
            this.nature = new PokemonNature('default', "", "");
            this.natureStat = {
                hp: 1,
                attack: 1,
                defense: 1,
                speAttack: 1,
                speDefense: 1,
                speed: 1,
            }
        }
        if( args.moves === undefined){
            this.moves = [];
        }else{
            this.moves = args.moves;
        }

        if( args.level === undefined){
            this.setLevel(1);
        }else{
            this.setLevel( args.level);
        }

    }

    setLevel( level: number): void{
        this.level = level;

        this.attack = Math.floor( Math.floor((2 * this.baseStat.attack + this.individualStat.attack + this.effortStat.attack) * level / 100 + 5)* this.natureStat.attack );
        this.defense = Math.floor( Math.floor((2 * this.baseStat.defense + this.individualStat.defense + this.effortStat.defense) * level / 100 + 5)* this.natureStat.defense );
        this.speAttack = Math.floor( Math.floor((2 * this.baseStat.speAttack + this.individualStat.speAttack + this.effortStat.speAttack) * level / 100 + 5)* this.natureStat.speAttack );
        this.speDefense = Math.floor( Math.floor((2 * this.baseStat.speDefense + this.individualStat.speDefense + this.effortStat.speDefense) * level / 100 + 5)* this.natureStat.speDefense );
        this.speed = Math.floor( Math.floor((2 * this.baseStat.speed + this.individualStat.speed + this.effortStat.speed) * level / 100 + 5)* this.natureStat.speed );

        this.hp = Math.floor( (2 * this.baseStat.hp + this.individualStat.hp + this.effortStat.hp) * level / 100 + level + 10 );
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



