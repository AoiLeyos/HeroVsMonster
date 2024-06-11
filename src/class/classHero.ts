import {
    Character
} from "./classCharacter.js";

export class Hero extends Character {
    private heal: number;


    constructor(name: string, health: number) {
        super(name, health);
        this.heal = Math.floor(Math.random() * 21)
    }

    public speHit(target: Character, damage: number) {
        target.currentHealth -= Math.max(damage * 2, 0);
        return this.currentHealth;
    }

    Heal(target: Character, heal: number) {
        target.currentHealth = Math.min(this.currentHealth + heal, this.health);
        if (this.health >= 100) {
            return 100
        } return this.currentHealth
    }
}