class Personnage {
    protected damage: number;
    protected name: string;
    protected health: number;
    protected healthMax: number;

    constructor(name: string, health: number, damage: number) {
        this.name = name;
        this.health = health;
        this.healthMax = health;
        this.damage = damage;
    }



    isAlive(): string {
        if (this.health > 0) {
            return this.health + "Alive"
        } return "Died"
    }

    getHealth(): number {
        return this.health;
    }

    getName(): string {
        return this.name;
    }
}

class Hero extends Personnage {
    private heal: number;

    constructor(name: string, health: number, damage: number, heal: number) {
        super(name, health, damage);
        this.heal = heal;
    }
}

class Monster extends Personnage {
    constructor(name: string, health: number, damage: number) {
        super(name, health, damage);
    }

}

const hero = new Hero("Jacques le Paladin", 100, 10, 10);

const monster = new Monster("Gollum", 100, 10)