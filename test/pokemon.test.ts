import {Pokemon} from "../src/pokemon";
import {PokemonNature} from "../src/pokemonNature";
import {PokemonType} from "../src/PokemonType";

describe( "pokemonBase stats", function (){

    it("pokemonBase stats", function (){
        const base: Pokemon = new Pokemon(
            {
                name: "papi",
                pokemonName: "Papilusion",
                type1: new PokemonType("default", {} ),
                nature: new PokemonNature("null", null, null),
                baseStat: {
                    hp: 60,
                    attack: 45,
                    defense: 50,
                    speAttack: 80,
                    speDefense: 80,
                    speed: 70
                },
                individualStat: {
                    hp: 28,
                    attack: 4,
                    defense: 17,
                    speAttack: 30,
                    speDefense: 27,
                    speed: 31
                },
                effortStat: {
                    hp: 1,
                    attack: 0,
                    defense: 0,
                    speAttack: 63,
                    speDefense: 0,
                    speed: 63
                },
                natureStat: {
                    hp: 1,
                    attack: 0.9,
                    defense: 1,
                    speAttack: 1.1,
                    speDefense: 1,
                    speed: 1
                }
            }
        );

        base.setLevel(53);

        expect(base.hp).toBe(141);
        expect(base.attack).toBe(48);
        expect(base.defense).toBe(67);
        expect(base.speAttack).toBe(152);
        expect(base.speDefense).toBe(104);
        expect(base.speed).toBe(129);

    });

    it("pokemonBase stats with nature", function (){
        const base: Pokemon = new Pokemon(
            {
                name: "papi",
                pokemonName: "Papilusion",
                nature: new PokemonNature("Modest ","attack", "special-attack"),
                type1: new PokemonType("default", {} ),
                baseStat: {
                    hp: 60,
                    attack: 45,
                    defense: 50,
                    speAttack: 80,
                    speDefense: 80,
                    speed: 70
                },
                individualStat: {
                    hp: 28,
                    attack: 4,
                    defense: 17,
                    speAttack: 30,
                    speDefense: 27,
                    speed: 31
                },
                effortStat: {
                    hp: 1,
                    attack: 0,
                    defense: 0,
                    speAttack: 63,
                    speDefense: 0,
                    speed: 63
                },
            },

        );

        base.setLevel(53);

        expect(base.hp).toBe(141);
        expect(base.attack).toBe(48);
        expect(base.defense).toBe(67);
        expect(base.speAttack).toBe(152);
        expect(base.speDefense).toBe(104);
        expect(base.speed).toBe(129);

    });

    it("pokemonBase with same Base stats should not be equals", function () {
        const p1: Pokemon = new Pokemon( {
            name: "pika",
            pokemonName: "pikachu",
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

        const p2: Pokemon = new Pokemon( {
            name: "cara",
            pokemonName: "carapuce",
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

        expect( p1 ).not.toBe( p2 );
    });

});



