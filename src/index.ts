import Hero from "./class/classHero";
import Monster from "./class/classMonster";

const attackBtn = document.getElementById('attack-btn');
const healBtn = document.getElementById('heal-btn');
const resetBtn = document.getElementById('reset-btn');
const hero = new Hero("Jacques le Paladin", 100);
const monster = new Monster("Gollum", 100)



function displayHealhStatus() {
    console.log(hero.getHealth())
    console.log(monster.getHealth())
}

attackBtn?.addEventListener('click', () => {
    hero.Hit(monster);
    monster.getHealth();
    setTimeout(() => {
        monster.Hit(hero);
        hero.getHealth();
    }, 1500)

    displayHealhStatus();
})

healBtn?.addEventListener('click', () => {
    hero.Heal();
    hero.getHealth();
    setTimeout(() => {
        monster.Hit(hero);
        hero.getHealth()
    }, 1500);


})

resetBtn?.addEventListener('click', () => {
    resetFight();
})

function resetFight() {
    hero.setHealth(100);
    monster.setHealth(100);
}

