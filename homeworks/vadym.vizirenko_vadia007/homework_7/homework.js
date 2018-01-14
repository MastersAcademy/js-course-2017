const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Hero(name, liveValue) {
    this.name = name;
    this.liveValue = liveValue;
}

Hero.prototype = {
    shotPower: 15,
    kickPower: 5,
    shot: function (otherHero) {
        this.takeHealth(otherHero, this.shotPower);
    },
    kick: function (otherHero) {
        this.takeHealth(otherHero, this.kickPower);
    },
    takeHealth: function (hero, amount) {
        hero.liveValue -= amount;
    },
    getLifeValue: function () {
        return this.liveValue > 0 ? this.liveValue : 0;
    }
};

SuperHero = function (name, liveValue) {
    Hero.apply(this, arguments);
};

SuperHero.prototype = Object.create(Hero.prototype);
Object.assign(SuperHero.prototype, {shotPower: 25, kickPower: 10, constructor: SuperHero});

SuperSuperHero = function (name, liveValue) {
    Hero.apply(this, arguments);
};

SuperSuperHero.prototype = Object.create(Hero.prototype);
Object.assign(SuperSuperHero.prototype, {shotPower: 35, kickPower: 15, constructor: SuperSuperHero});

function Game() {
    const minLive = 100,
        range = 50,
        heroTypes = [Hero, SuperHero, SuperSuperHero],
        heroNames = ['SuperMan', 'BatMan', 'JsDeveloper'];

    function getRandomLiveValue() {
        return minLive + Math.floor(Math.random() * range);
    }

    function createHero() {
        const nameNumber = Math.floor(Math.random() * heroNames.length);
        const heroName = heroNames[nameNumber];
        const heroType = heroTypes[Math.floor(Math.random() * heroTypes.length)];
        const liveValue = getRandomLiveValue();

        heroNames.splice(nameNumber, 1);

        return new heroType(heroName, liveValue);
    }

    this.run = function () {
        this.playerOne = createHero();
        this.playerTwo = createHero();
    };

    this.showLog = function (playerOne, playerTwo, demageType) {
        const log = `${playerOne.name} ${demageType} -${playerOne[demageType + 'Power']} from ${playerTwo.name} rest ${playerTwo.getLifeValue()}`;
        console.log(log);
    };

    this.checkIsOver = function (playerOne, playerTwo) {
        if (playerOne.getLifeValue() == 0) {
            console.log(`${playerTwo.name} Win with ${playerTwo.getLifeValue()} lives!`);
            process.exit();
        }

        if (playerTwo.getLifeValue() == 0) {
            console.log(`${playerOne.name} Win with ${playerOne.getLifeValue()} lives!`);
            process.exit();
        }
    }
}

const game = new Game();
console.log('Press n to start');

process.stdin.on('keypress', function (ch, key) {
    process.stdout.clearLine();

    switch (ch) {
        case 'n':
            game.run();
            console.log('Game was started');
            break;
        case 'q':
            game.playerOne.shot(game.playerTwo);
            game.showLog(game.playerOne, game.playerTwo, 'shot');
            break;
        case 'w':
            game.playerOne.kick(game.playerTwo);
            game.showLog(game.playerOne, game.playerTwo, 'kick');
            break;
        case 'o':
            game.playerTwo.shot(game.playerOne);
            game.showLog(game.playerTwo, game.playerOne, 'shot');
            break;
        case 'p':
            game.playerTwo.kick(game.playerOne);
            game.showLog(game.playerTwo, game.playerOne, 'kick');
            break;
        default:
            console.log('Wrong key');
    }

    if (game.playerOne !== undefined) {
        game.checkIsOver(game.playerOne, game.playerTwo);
    }
});
