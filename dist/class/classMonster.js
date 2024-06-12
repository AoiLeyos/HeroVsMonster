import { Character } from "./classCharacter.js";
export class Monster extends Character {
    constructor(name, health) {
        super(name, health);
        this.currentHealth = health;
    }
}
