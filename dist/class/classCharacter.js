export class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.currentHealth = health;
        // this.damage = Math.floor(Math.random() * 21);
    }
    Hit(target, damage) {
        target.currentHealth -= Math.max(damage, 0);
        return this.currentHealth;
    }
    isAlive() {
        return this.currentHealth > 0;
    }
    getHealth() {
        return this.health;
    }
    getCurrentHealth() {
        return this.currentHealth;
    }
    setCurrentHealth(value) {
        this.currentHealth = value;
    }
    getName() {
        return this.name;
    }
}
