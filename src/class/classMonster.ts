import {
    Character
} from "./classCharacter.js";

export class Monster extends Character {
    currentHealth: number
    constructor(name: string, health: number) {
        super(name, health);
        this.currentHealth = health

    }

}