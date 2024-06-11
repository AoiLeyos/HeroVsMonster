export class Character {
    // protected damage: number;
    protected name: string;
    protected health: number;
    public currentHealth: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
        this.currentHealth = health
        // this.damage = Math.floor(Math.random() * 21);
    }

    public Hit(target: Character, damage: number) {
        target.currentHealth -= Math.max(damage, 0);
        return this.currentHealth;
    }


    isAlive(): boolean {
        return this.currentHealth > 0;
    }

    getHealth(): number {
        return this.health;
    }

    getCurrentHealth(): number {
        return this.currentHealth;
    }
    setCurrentHealth(value: number) {
        this.currentHealth = value;
    }

    getName(): string {
        return this.name;
    }
}