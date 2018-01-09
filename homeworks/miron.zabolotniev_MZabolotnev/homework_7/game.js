const readline = require('readline');

const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PHRASES = {
    enter: "Please enter name (max 5 letters) player #",
    end: "Press E to exit",
    turtorial: "\x1b[33mPlayer #1 : Q - kick, W - shot. Player #2 : O - kick, P - shot. E - exit"
};

const AVATARS = fs.readFileSync('avatars.txt', 'utf8').split("\n");

class Hero {
    constructor (name, stamina) {
        this.name = name;
        this.stamina = stamina;
        this.avatar = AVATARS[Math.floor(Math.random() * AVATARS.length)]
    }
    shot(otherHero) {
        otherHero.stamina -= 15;
    }
    kick(otherHero) {
        otherHero.stamina -= 5;
    }
    getLifeValue() {
        return this.stamina;
    }
}

class SuperHero extends Hero{
    constructor (name, stamina) {
        super(name, stamina);
    }
    shot(otherHero) {
        otherHero.stamina -= 25;
    }
    kick(otherHero) {
        otherHero.stamina -= 10 ;
    }
}

let player1 = {};
let player2 = {};
let startStamina = {};
let state = "start";
let log = "";

rl.question(PHRASES.enter + "1: ", (name1) => {
    console.log(state);
    player1 = createPlayer(name1);
    rl.question(PHRASES.enter + "2: ", (name2) => {
        player2 = createPlayer(name2);
        state = "fight";
        startStamina = {
            player1: player1.stamina,
            player2: player2.stamina
        };
        setInterval( () => {
            userInterface()
        }, 10);
    });
});

process.stdin.on('keypress', key => {
    if (state === "fight") {
        let life = 0;
        let damage = 0;
        switch(key) {
            case "q":
                life = player2.getLifeValue();
                player1.kick(player2);
                damage = life - player2.getLifeValue();
                logger(player1, player2, damage, "kick");
                break;
            case "w":
                life = player2.getLifeValue();
                player1.shot(player2);
                damage = life - player2.getLifeValue();
                logger(player1, player2, damage, "shot");
                break;
            case "o":
                life = player1.getLifeValue();
                player2.kick(player1);
                damage = life - player1.getLifeValue();
                logger(player2, player1, damage, "kick");
                break;
            case "p":
                life = player1.getLifeValue();
                player2.shot(player1);
                damage = life - player1.getLifeValue();
                logger(player2, player1, damage, "shot");
                break;
            case "e":
                console.log('\x1Bc');
                process.exit();
        }
    }
});

function userInterface() {
    if (player1.getLifeValue() > 0 && player2.getLifeValue() > 0) {
        console.log('\x1Bc');
        console.log(PHRASES.turtorial);
        console.log(  status() );
        console.log(log);
    } else if (player1.getLifeValue() <= 0 || player2.getLifeValue() <= 0 ) {
        let winner = "";
        if (player1.getLifeValue() < 0 ) {
            winner = `\x1b[32m${player2.name} WIN! Stamina: ${player2.getLifeValue()}`
        } else {
            winner = `\x1b[32m${player1.name} WIN! Stamina: ${player1.getLifeValue()}`
        }
        console.log('\x1Bc');
        console.log(winner);
        console.log(PHRASES.end);
    }
}

function status() {
    let space = " ".repeat(20);
    let space2 = " ".repeat(20);
    if (player1.name.length < 10) {
        space2 = space2 + " ".repeat(10 - player1.name.length - player2.name.length);
    }
    let statusNames = `${player1.name}${space2}${player2.name}\n`;
    let statusStamina = `♥:${player1.getLifeValue()}${space}♥:${player2.getLifeValue()}\n`;
    let statusLine1 = staminaBar(startStamina.player1, player1.stamina);
    let statusLine2 = staminaBar(startStamina.player2, player2.stamina);
    let avatar = "\n" + player1.avatar + " ".repeat(16) + player2.avatar;

    return "\x1b[35m" + statusNames + "\x1b[32m" + statusStamina + statusLine1 +
        " ".repeat(10) + statusLine2 + "\x1b[35m" + avatar;

    function staminaBar(startStamina, actualStamina) {
        let diff = startStamina - actualStamina;
        let helper = Math.floor(diff/10);
        return "=".repeat(Math.abs((10 - helper))) + "-".repeat(Math.abs(helper)) ;
    }
}

function logger (player1, player2, damage, method) {
    log = `\x1b[31m${player1.name} ${method} ${damage} damage from ${player2.name} rest ${player2.stamina}`
}

function createPlayer (name) {
    let player = {};
    if ( random(1,2) === 1){
        player = new Hero(name, random(100, 150) );
    } else {
        player = new SuperHero(name, random(100, 150) );
    }
    return player;
}

function random (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
