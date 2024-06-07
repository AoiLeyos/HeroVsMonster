const attackBtn = document.getElementById('attack-btn');
const healBtn = document.getElementById('heal-btn');
const resetBtn = document.getElementById('reset-btn');
const hero = new Hero("Jacques le Paladin", 100);
const monster = new Monster("Gollum", 100, 10)

attackBtn?.addEventListener('click', () => {
    hero.Hit(monster);
    monster.Hit(hero);
    monster.getHealth();
    hero.getHealth();
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
