
export class Pokemon{

    name: string;
    speed: number;
    stamina: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
        this.stamina = 0;
    }

    nextTurn(): void{
        this.stamina += this.speed;
    }

    isTurn(): boolean{
        return this.stamina >= 100;
    }

    play(){
        this.stamina -= 100;
    }

}



