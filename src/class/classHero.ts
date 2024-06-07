import {
    Character
} from "./classCharacter";

export default class Hero extends Character {
    private heal: number;

    constructor(name: string, health: number) {
        super(name, health);
        this.heal = Math.floor(Math.random() * 21)
    }

    getHealth(): number {
        return this.health;
    }

    setHealth(value: number) {
        this.health = value;
    }


    Heal() {

        if (this.health > 100) {
            return 100
        }
    }
}