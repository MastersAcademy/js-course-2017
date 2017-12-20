class Hero {
    constructor(heroParameters) {
        this.health = heroParameters.getRandomHealth(heroParameters.healthMin, heroParameters.healthMax);
        this.name = heroParameters.name;
        this.kickDamage = heroParameters.kickDamage;
        this.shotDamage = heroParameters.shotDamage;
        this.hasHealth = true;
    }

    lifeCheck() {
        if (this.getLifeValue() <= 0) {
            return this.hasHealth = false;
        }
    }

    kick(otherHero) {
        otherHero.health -= this.kickDamage;
        let log = `${otherHero.name} kick ${this.kickDamage} from ${this.name} rest ${otherHero.getLifeValue()}`;
        this.lifeCheck();
        console.log(log);
    }

    shot(otherHero) {
        otherHero.health -= this.shotDamage;
        let log = `${otherHero.name} shot ${this.shotDamage} from ${this.name} rest ${otherHero.getLifeValue()}`;
        this.lifeCheck();
        console.log(log);
    }

    getLifeValue() {
        return this.health;
    }
}
const superDamageIncrease = 5,
    superShotIncrease = 10;

class SuperHero extends Hero {
    constructor(heroParameters) {
        super(heroParameters);
        this.kickDamage = heroParameters.kickDamage + superDamageIncrease;
        this.shotDamage = heroParameters.shotDamage + superShotIncrease;
    }
}

let heroParameters = {
    healthMin : 100,
    healthMax : 150,
    name : 'player',
    kickDamage : 5,
    shotDamage : 15,
    getRandomHealth : function (healthMin, healthMax) {
        this.health = healthMin - 0.5 + Math.random() * (healthMax - healthMin + 1);
        this.health = Math.round(this.health);
        return this.health;
    }
};


function getRandomOne() {
    return Math.random() < 0.5 ? -1 : 1;
}

class Play {
    constructor() {
        this.gameStarted = false;
        this.gameEnded = false;
    }

    newRandomHero(heroParameters) {
        let random = getRandomOne();
        if (random < 0) {
            return new Hero(heroParameters);
        } else return new SuperHero(heroParameters);
    }
    checkHeroHealth(player) {
        if (player.health <= 0){
            return this.gameEnded = true;
        }
    }
}

let game = new Play(heroParameters),
    player1,
    player2;


const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {

    if (key.ctrl && key.name === 'c') {
        process.exit();
    }

    if (key.name === 'n' && game.gameStarted === false) {
        player1 = game.newRandomHero(heroParameters);
        player2 = game.newRandomHero(heroParameters);
        game.newRandomHero(heroParameters);
    }

    let player1HPcheck = player1.hasHealth === true,
        player2HPcheck =player2.hasHealth === true;
    if (key.name === 'q' && player1HPcheck && player2HPcheck) {
        player1.kick(player2);
    }

    if (key.name === 'c') {
        clearTimer();
    }
    if (key.name === 'p' && timerRun === true) {
        pauseTimer();
    }
    if (key.name === 'r' && timerRun === false) {
        restorePause();
    }
});
console.log(`Press 'b' to begin timer
Press 'ctrl + c' to exit
Press 's' to stop
Press 'c' to clear
Press 'p' to pause
Press 'r' to restore`);
