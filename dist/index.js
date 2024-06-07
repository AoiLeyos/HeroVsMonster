"use strict";
class Personnage {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.healthMax = health;
        this.damage = damage;
    }
    isAlive() {
        if (this.health > 0) {
            return this.health + "Alive";
        }
        return "Died";
    }
    getHealth() {
        return this.health;
    }
    getName() {
        return this.name;
    }
}
class Hero extends Personnage {
    constructor(name, health, damage, heal) {
        super(name, health, damage);
        this.heal = heal;
    }
}
class Monster extends Personnage {
    constructor(name, health, damage) {
        super(name, health, damage);
    }
}
const hero = new Hero("Jacques le Paladin", 100, 10, 10);
const monster = new Monster("Gollum", 100, 10);
