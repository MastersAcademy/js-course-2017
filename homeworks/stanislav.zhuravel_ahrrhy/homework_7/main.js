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

    playerKick(opponent1, opponent2) {
        this.checkHeroHealth(opponent2);
        if (!this.gameEnded) {
            opponent1.kick(opponent2);
            this.checkHeroHealth(opponent2);
            this.endGameLog(opponent1, opponent2);
        }
    }

    playerShot(opponent1, opponent2) {
        this.checkHeroHealth(opponent2);
        if (!this.gameEnded) {
            opponent1.shot(opponent2);
            this.checkHeroHealth(opponent2);
            this.endGameLog(opponent1, opponent2);
        }

    }

    endGameLog(opponent1, opponent2) {
        let winner,
            log;
        if (this.gameEnded === true) {
            opponent1.lifeCheck();
            opponent2.lifeCheck();
            opponent1.hasHealth ? (winner = opponent1) : winner = opponent2;
            log = `Winner is ${winner.name} with ${winner.health} hp`;
            console.log(log);
            this.gameStarted = false;
            this.gameEnded = false;
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
        game.gameStarted = true;
        game.gameEnded = false;
    }

    if (key.name === 'q') {
        game.playerKick(player1, player2);
        game.endGameLog(player1, player2);
    }
    if (key.name === 'w') {
        game.playerShot(player1, player2);
        game.endGameLog(player1, player2);
    }
    if (key.name === 'p') {
        game.playerKick(player2, player1);
        game.endGameLog(player1, player2);
    }
    if (key.name === 'r') {
        game.playerShot(player2, player1);
        game.endGameLog(player1, player2);
    }
});
console.log(`Press 'n' to start game
Press 'ctrl + c' to exit

-- player 1 --
Press 'q' to kick
Press 'w' to shot

-- player 2 --
Press 'p' to kick
Press 'o' to shot`);
