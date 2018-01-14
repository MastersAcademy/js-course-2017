let player1 = 0,
    player2 = 0;

class Hero {
    constructor(health, name) {
        this.health = health || 150;
        this.name = name || 'name';
    }

    shot(enemy) {
        enemy.health -= 15;
    }

    kick(enemy) {
        enemy.health -= 5;
    }

    get getLifeValue() {
        return this.health;
    }
}


class SuperHero extends  Hero {
    constructor(health, name) {
        super(health, name);
    }

    shot(enemy) {
        super.shot(enemy);
        enemy.health -= 10;
    }

    kick(enemy) {
        super.kick(enemy);
        enemy.health -= 5;
    }

    get getLifeValue() {
        return this.health;
    }
}


function newGame() {
    let getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    player1 = getRandomInt(1, 2);
    player2 = getRandomInt(1, 2);

    if (player1 === 1) {
        player1 = new Hero(getRandomInt(100, 150), 'Hero');
    } else  {
        player1 = new SuperHero(getRandomInt(100, 150), 'SuperHero');
    }

    if (player2 === 1) {
        player2 = new Hero(getRandomInt(100, 150), 'Hero');
    } else  {
        player2 = new SuperHero(getRandomInt(100, 150), 'SuperHero');
    }
    console.log('\x1Bc');
    console.log(`${player1.name} (${player1.getLifeValue} hp) vs ${player2.name} (${player2.getLifeValue} hp)`);
}


function interaction(who, action, whom) {
    let damage = whom.getLifeValue;

    if (who.getLifeValue <= 0 || whom.getLifeValue <= 0)  {
        return;
    }

    who[action](whom);
    damage -= whom.getLifeValue;

    console.log('\x1Bc');
    if (whom.getLifeValue <= 0) {
        if (player1.getLifeValue >= 0) {
            console.log(`${who.name} (player 1) win! ${who.name} has ${who.getLifeValue} hp.`);
        } else {
            console.log(`${who.name} (player 2) win! ${who.name} has ${who.getLifeValue} hp.`);
        }
    } else {
        console.log(`${player1.name} (${player1.getLifeValue} hp) vs ${player2.name} (${player2.getLifeValue} hp)`, '\n');
        console.log(`${who.name} ${action} -${damage} hp from ${whom.name} rest ${whom.getLifeValue} hp`);
    }
}


process.stdin.setRawMode(true);

process.stdin.on('readable', () => {
    const key = process.stdin.read();

    if (!key) return;

    const str = String(key);

    switch (str) {
        case 'null':
            break;
        case 'N':
        case 'n':
            newGame();
            break;
        case 'Q':
        case 'q':
            interaction(player1, 'kick', player2);
            break;
        case 'W':
        case 'w':
            interaction(player1, 'shot', player2);
            break;
        case 'O':
        case 'o':
            interaction(player2, 'kick', player1);
            break;
        case 'P':
        case 'p':
            interaction(player2, 'shot', player1);
            break;
        case 'H':
        case 'h':
            console.log('This is help.\nPress\n\tn for start new game\n\t' +
            'x get out of the game\n\th for this help\n\tc for clear terminal');
            break;
        case 'C':
        case 'c':
            console.log('\x1Bc');
            break;
        case 'X':
        case 'x':
            process.exit(0);
        default:
            console.log(str);
    }
});

console.log('Welcome here, gamer! Press n for start game or h for help.'); 