import { Character } from "./classCharacter.js";
export class Hero extends Character {
    constructor(name, health) {
        super(name, health);
        this.heal = Math.floor(Math.random() * 21);
    }
    speHit(target, damage) {
        target.currentHealth -= Math.max(damage * 2, 0);
        return this.currentHealth;
    }
    Heal(target, heal) {
        target.currentHealth = Math.min(this.currentHealth + heal, this.health);
        if (this.health >= 100) {
            return 100;
        }
        return this.currentHealth;
    }
}
