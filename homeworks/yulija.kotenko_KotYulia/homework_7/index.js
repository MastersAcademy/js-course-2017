const superShot = 10,
    superKick = 5;

let values = {
    lifeMin : 100,
    lifeMax : 150,
    name : 'Star',
    shotHero : 15,
    kickHero : 5,
    getRandomLife : function (lifeMin, lifeMax) {
        this.life = lifeMin - 0.5 + Math.random() * (lifeMax - lifeMin + 1);
        this.life = Math.round(this.life);
        return this.life;
    }
}

class Hero {
    constructor (values) {
        this.name = values.name;
        this.life = values.life || 150;
        this.shotHero = values.shotHero;
        this.kickHero = values.kickHero;
        this.hasLife = true;
        this.life = values.getRandomLife(values.lifeMin, values.lifeMax);
    }

    lifeControl(){
        if (this.getLifeValue() <= 0) {
            return this.hasLife = false;
        }
    }

    shoot(otherHero) {
        otherHero.life -= this.shotHero;
        let message = `${otherHero.name} shot - ${this.shotHero} from ${this.name} rest ${otherHero.getLifeValue()}`;
        this.lifeControl();
        console.log(message);
    }

    kick(otherHero) {
        otherHero.life -= this.kickHero;
        let message = `${otherHero.name} kick - ${this.kickHero} from ${this.name} rest ${otherHero.getLifeValue()}`;
        this.lifeControl();
        console.log(message);
    }

    getLifeValue() {
        return this.life;
    }
}

class SuperHero extends Hero {
    constructor (values) {
        super (values);
        this.shotHero = values.shotHero + superShot;
        this.kickHero = values.kickHero + superKick;
    }
}

function randomControl() {
    return Math.random() < 0.5 ? -1 : 1;
}
class Game {
    constructor() {
        this.gamePlay = false;
        this.gameOver = false;
    }

    newHero(values) {
        let random = randomControl();
        if (random < 0) {
            return new Hero(values);
        } else return new SuperHero(values);
    }

    heroLifeControl(gamer) {
        if (gamer.life <= 0){
            return this.gameOver = true;
        }
    }

    gamerKick(player1, player2) {
        this.heroLifeControl(player2);
        if (!this.gameOver) {
            player1.kick(player2);
            this.heroLifeControl(player2);
            this.overMessage(player1, player2);
        }
    }

    gamerShot(player1, player2) {
        this.heroLifeControl(player2);
        if (!this.gameOver) {
            player1.shoot(player2);
            this.heroLifeControl(player2);
            this.overMessage(player1, player2);
        }
    }

    overMessage(player1, player2) {
        let winner,
            message;

        if (this.gameOver === true) {
            player1.lifeControl();
            player2.lifeControl();

            if (player1.hasLife) {
                winner = player1;
            } else {
                winner = player2;
            }

            message = `Game over: ${winner.name} won with ${winner.life}`;
            console.log(message);
            this.gamePlay = false;
            this.gameOver = false;
        }
    }
}

let game = new Game(values),
    gamer1,
    gamer2;

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {

    if (key.name === 'e') {
        process.exit();
    }

    if (key.name === 'g' && game.gamePlay === false) {
        gamer1 = game.newHero(values);
        gamer2 = game.newHero(values);
        game.gamePlay = true;
        game.gameOver = false;
        console.log(`Game started:
-- gamer1 --
Press 'q' to kick
Press 'w' to shot
-- gamer2 --
Press 'o' to kick
Press 'p' to shot`);
    }

    if (key.name === 'q') {
        game.gamerKick(gamer1, gamer2);
        game.overMessage(gamer1, gamer2);
    }

    if (key.name === 'w') {
        game.gamerShot(gamer1, gamer2);
        game.overMessage(gamer1, gamer2);
    }

    if (key.name === 'o') {
        game.gamerKick(gamer1, gamer2);
        game.overMessage(gamer1, gamer2);
    }

    if (key.name === 'p') {
        game.gamerShot(gamer1, gamer2);
        game.overMessage(gamer1, gamer2);
    }

});

console.log(`Press 'g' to start game
Press 'e' to exit`);