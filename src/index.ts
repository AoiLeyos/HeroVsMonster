import { Hero } from "./class/classHero.js";
import { Monster } from "./class/classMonster.js";

let monster = new Monster("Gollum", 100);
console.log(monster);
let hero = new Hero("Jacques le Paladin", 100);
console.log(hero);
const attackBtn = document.getElementById('attack-btn') as HTMLButtonElement;
const healBtn = document.getElementById('heal-btn') as HTMLButtonElement;
const speAttackBtn = document.getElementById('spe-attack-btn') as HTMLButtonElement;
const abortTheMission = document.getElementById('abort-btn') as HTMLButtonElement;
const currentHeroHp = document.querySelector(".hero-progressValue") as HTMLTitleElement;
const currentMonsterHp = document.querySelector(".monster-progressValue") as HTMLTitleElement;


function updateProgress() {
    currentHeroHp.textContent = `${hero.getCurrentHealth()}%`;
    currentMonsterHp.textContent = `${monster.getCurrentHealth()}%`;
    let healthHeroBar = document.getElementById('hero-hp') as HTMLProgressElement;
    healthHeroBar.value = hero.getCurrentHealth();
    healthHeroBar.max = hero.getHealth();

    let healthMonsterBar = document.getElementById('monster-hp') as HTMLProgressElement;
    healthMonsterBar.value = monster.getCurrentHealth();
    healthMonsterBar.max = monster.getHealth();

}


attackBtn.addEventListener('click', () => {
    const HeroAttackDamage = Math.floor(Math.random() * 21);
    hero.Hit(monster, HeroAttackDamage);
    const currentMonsterHealth = monster.getCurrentHealth();
    const MonsterAttackDamage = Math.floor(Math.random() * 21);
    monster.Hit(hero, MonsterAttackDamage);
    const currentHeroHealth = hero.getCurrentHealth();
    if (hero.getCurrentHealth() <= 0) {
        hero.setCurrentHealth(0);
        resetFight();
        updateProgress();
    }
    if (monster.getCurrentHealth() <= 0) {
        monster.setCurrentHealth(0);
        resetFight();
        updateProgress();
    }
    disabledFightButtons();
    displayHealthStatus(currentHeroHealth, currentMonsterHealth);
    updateProgress();
})

speAttackBtn.addEventListener('click', () => {
    const HeroAttackDamage = Math.floor(Math.random() * 21);
    hero.speHit(monster, HeroAttackDamage);
    const currentMonsterHealth = monster.getCurrentHealth();
    const MonsterAttackDamage = Math.floor(Math.random() * 21);
    monster.Hit(hero, MonsterAttackDamage);
    const currentHeroHealth = hero.getCurrentHealth();

    if (hero.getCurrentHealth() <= 0) {
        hero.setCurrentHealth(0);
        resetFight();
        updateProgress();
    }
    if (monster.getCurrentHealth() <= 0) {
        monster.setCurrentHealth(0);
        resetFight();
        updateProgress();
    }

    disabledFightButtons();
    displayHealthStatus(currentHeroHealth, currentMonsterHealth);
    updateProgress();
})

if (hero.getCurrentHealth() <= 0 || monster.getCurrentHealth() <= 0) {
    healBtn.disabled = true
}
function disabledFightButtons() {
    if (hero.getCurrentHealth() <= 0 || monster.getCurrentHealth() <= 0) {
        attackBtn.disabled = true
    }
    if (hero.getCurrentHealth() <= 0 || monster.getCurrentHealth() <= 0) {
        speAttackBtn.disabled = true
    }
    if (hero.getCurrentHealth() <= 0 || monster.getCurrentHealth() <= 0) {
        healBtn.disabled = true
    }
}

healBtn.addEventListener('click', () => {
    const MonsterAttackDamage = Math.floor(Math.random() * 21);
    const heroHealAmount = Math.floor(Math.random() * 16)
    hero.Heal(hero, heroHealAmount);
    monster.Hit(hero, MonsterAttackDamage);
    const currentHeroHealth = hero.getCurrentHealth();
    const currentMonsterHealth = monster.getCurrentHealth()

    if (hero.getCurrentHealth() >= 100) {
        hero.setCurrentHealth(100)
    }
    if (hero.getCurrentHealth() <= 0) {
        hero.setCurrentHealth(0);
        resetFight();
        updateProgress();
    }

    disabledFightButtons();
    displayHealthStatus(currentHeroHealth, currentMonsterHealth);
    updateProgress();
})

function
    displayHealthStatus(HeroHealth: number, MonsterHealth: number) {
    const heroHealth = Math.max(HeroHealth, 0);
    const monsterHealth = Math.max(MonsterHealth, 0)

    if (HeroHealth <= 0 && MonsterHealth <= 0) {
        alert("Equality")
    } else if (MonsterHealth <= 0) {
        alert("Hero wins");
    } else if (HeroHealth <= 0) {
        alert("Monster wins")
    };

    console.log(`Hero's health :  ${heroHealth}`);
    console.log(`Monster's health : ${monsterHealth}`);

}

abortTheMission.addEventListener('click', () => {
    alert("You're weak")
    resetFight();
    updateProgress();
})


function resetFight() {
    hero.setCurrentHealth(100);
    monster.setCurrentHealth(100);
    const currentHeroHealth = hero.getCurrentHealth();
    const currentMonsterHealth = monster.getCurrentHealth();
    attackBtn.disabled = false
    healBtn.disabled = false
    speAttackBtn.disabled = false

    displayHealthStatus(currentHeroHealth, currentMonsterHealth);
    updateProgress()
}


