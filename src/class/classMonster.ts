class Monster extends Character {
    constructor(name: string, health: number, damage: number) {
        super(name, health);
    }


    getHealth(): number {
        return this.health;
    }

    setHealth(value: number) {
        this.health = value;
    }

}