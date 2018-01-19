let player1 = 0, player2 = 0;

class Hero{
    constructor(nameHero, healthHero = 150){
        this.nameHero = nameHero;
        this.healthHero = healthHero;
        this.shotHero = 15;
        this.kickHero = 5;
    }

    shot(otherHero){
        otherHero.healthHero -= this.shotHero;
    }

    kick(otherHero){
        otherHero.healthHero -= this.kickHero;
    }

    getLifeValue(){
        return this.healthHero;
    }
}

class SuperHero extends Hero{
    constructor(nameHero, healthHero){
        super(nameHero, healthHero);
        this.shotHero = 25;
        this.kickHero = 10;
    }

    shot(otherHero){
        otherHero.healthHero -= this.shotHero;
    }

    kick(otherHero){
        otherHero.healthHero -= this.kickHero;
    }
}


function initializeHeros(){
    let randomHero1 = Math.floor(Math.random() * (3 - 1)) + 1;
    let randomHero2 = Math.floor(Math.random() * (3 - 1)) + 1;

    if (randomHero1 === 1){
        player1 = new Hero('Hero', Math.floor(Math.random() * (151 - 100)) + 100);
    }else{
        player1 = new SuperHero('SuperHero', Math.floor(Math.random() * (151 - 100)) + 100);
    }

    if (randomHero2 === 1){
        player2 = new Hero('Hero', Math.floor(Math.random() * (151 - 100)) + 100);
    }else{
        player2 = new SuperHero('SuperHero', Math.floor(Math.random() * (151 - 100)) + 100);
    }
}


function checkHealthHeros(){
    if (player1.healthHero <= 0){
        console.log(`Won player 2 with name "${player2.nameHero}" and remainder of lives ${player2.getLifeValue()}`);
        process.exit(0);
    }else if (player2.healthHero <= 0){
        console.log(`Won player 1 with name "${player1.nameHero}" and remainder of lives ${player1.getLifeValue()}`);
        process.exit(0);
    }
}

process.stdin.setRawMode(true);
console.log('Welcome to game\nPress:\n\tn - for start new game\n\tz - to quit the game');
process.stdin.on('readable', () => {
    const key = process.stdin.read();
    checkHealthHeros();
    if (!key) return;
    const str = String(key);
    switch (str) {
        case 'null':
        break;
        case 'N':
        case 'n':
            console.log('Control\nFirst player:\n\tq - kick\n\tw - shot\nSecond player:\n\to - kick\n\tp - shot');
            initializeHeros();
            break;
        case 'Q':
        case 'q':
            player1.kick(player2);
            console.log(`${player1.nameHero} kick on ${player1.kickHero} damage from ${player2.nameHero} rest ${player2.getLifeValue()}`);
            break;
        case 'W':
        case 'w':
            player1.shot(player2);
            console.log(`${player1.nameHero} shot on ${player1.shotHero} damage from ${player2.nameHero} rest ${player2.getLifeValue()}`);
            break;
        case 'O':
        case 'o':
            player2.kick(player1);
            console.log(`${player2.nameHero} kick on ${player2.kickHero} damage from ${player1.nameHero} rest ${player1.getLifeValue()}`);
            break;
        case 'P':
        case 'p':
            player2.shot(player1);
            console.log(`${player2.nameHero} shot on ${player2.shotHero} damage from ${player1.nameHero} rest ${player1.getLifeValue()}`);
            break;
        case 'Z':
        case 'z':
            process.exit(0);
        default:
            console.log(str);
    }
});
