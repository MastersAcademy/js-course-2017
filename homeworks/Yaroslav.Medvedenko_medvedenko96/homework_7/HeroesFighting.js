function Hero(nameHero, health) {
    this.nameHero = nameHero;
    this.health = health || 150;
    this.shotDamages = 15;
    this.kickDamages = 5;
}

Hero.prototype = {
    shot(otherHero){
        otherHero.health -= this.shotDamages;

    },
    kick(otherHero){
        otherHero.health -= this.kickDamages;


    },
    getLifeValue(){
        return this.health;
    }
};

function SuperHero (nameHero, health) {
    Hero.call(this, nameHero, health);
    this.shotDamages = 25;
    this.kickDamages = 10;
}

SuperHero.prototype.__proto__ = Hero.prototype;

let hero1 = {},
    hero2 = {};

function getRandomHeroHealth() {
    return Math.floor(Math.random() * (50) + 100);
}

function getRandomHero(nameHero) {
    let variable;
    let randomHero = Math.floor(Math.random() * (2) + 1);
    if (randomHero === 1) {
        variable = new Hero(nameHero,getRandomHeroHealth());
        variable.type = 'Hero';
    } else {
        variable = new SuperHero(nameHero,getRandomHeroHealth());
        variable.type = 'SuperHero';
    }
    return variable;
}

function newGame() {
    hero1 = getRandomHero('hero1');
    hero2 = getRandomHero('hero2');
    console.log(hero1);
    console.log(hero2);
}

function heroWin() {
    if (hero1.health <= 0){
        console.log('victory the secondary hero');
        process.exit(0);
    } else if (hero2.health <= 0){
        console.log('victory the first hero');
        process.exit(0);
    }
}

function control() {
    console.log('Welcome n - newGame, q - kick hero1, w - shot hero1, o - kick hero2, p - shot hero2,e e - exit.');
    process.stdin.setRawMode(true);
    newGame();
    process.stdin.on('readable', () => {
        const key = process.stdin.read();

        if (!key) return;
        const strKey = String(key).toLowerCase();
        heroWin();

        switch (strKey) {
            case 'n':
                newGame();
                break;
            case 'q':
                hero1.kick(hero2);
                console.log(`${hero1.nameHero}, kick, ${hero1.kickDamages}, from, ${hero2.nameHero}, ${hero2.health}`);
                break;
            case 'w':
                hero1.shot(hero2);
                console.log(`${hero1.nameHero}, shot, ${hero1.shotDamages}, from, ${hero2.nameHero}, ${hero2.health}`);
                break;
            case 'o':
                hero2.kick(hero1);
                console.log(`${hero2.nameHero}, kick, ${hero2.kickDamages}, from, ${hero1.nameHero}, ${hero1.health}`);
                break;
            case 'p':
                hero2.shot(hero1);
                console.log(`${hero2.nameHero}, shot, ${hero2.shotDamages}, from, ${hero1.nameHero}, ${hero1.health}`);
                break;
            case 'e':
                process.exit(0);
        }
    });
}

control();

