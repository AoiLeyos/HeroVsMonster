class personnages {
    name: string;
    health: number;
    healthMax: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
        this.healthMax = health;
    }

    beAlive(): boolean {
        return this.health > 0;
    }

    gethealth(): number {
        return this.health;
    }

    getname(): string {
        return this.name;
    }
}

class Hero {

}

class Monster {

}