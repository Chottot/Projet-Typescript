

export class PokemonMove {

    name: string;
    accuracy: number;
    power: number;
    pp: number;
    priority: number;


    constructor(name: string, accuracy: number, power: number, pp: number, priority: number) {
        this.name = name;
        this.accuracy = accuracy;
        this.power = power;
        this.pp = pp;
        this.priority = priority;
    }

}