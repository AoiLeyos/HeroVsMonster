export class Character {
    protected damage: number;
    protected name: string;
    protected health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
        this.damage = Math.floor(Math.random() * 21);
    }

    public Hit(target: Character) {
        target.health -= this.damage;
    }


    isAlive(): boolean {
        return this.health > 0;
    }

    getHealth(): number {
        return this.health;
    }

    getName(): string {
        return this.name;
    }
}