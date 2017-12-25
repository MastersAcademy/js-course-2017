class Hero {
    constructor(name = 'Unknown hero', life = 150) {
        this.name = name;
        this.life = life;
    }

    shot(otherHero) {
        return otherHero.life -= 15;
    }

    kick(otherHero) {
        return otherHero.life -= 5;
    }

    getLifeValue() {
        return this.life;
    }

}

class SuperHero extends Hero {

    constructor() {
        super();
    }

    kick(otherHero) {
        return otherHero.life -= 25;
    };

}


function handleKeypress(hero1, hero2) {

    checkHeroesLifes(hero1, hero2);

    process.stdin.on('keypress', function (ch, key) {
        switch (key.name) {
            case 'n':
                initGame();
                break;
            case 'q':
                hero1.kick(hero2);
                break;
            case 'w':
                hero1.shot(hero2);
                break;
            case 'o':
                hero2.kick(hero1);
                break;
            case 'p':
                hero2.shot(hero1);
                break;
        }
    });

}

function generateLifeCount() {
    let life = Math.floor(Math.random() * ((150 - 100) + 1) + 100);

    return life;
}

function generateRandomArrItem(heroesArr) {
    let randomArrItem = Math.floor(Math.random() * heroesArr.length);
    return randomArrItem;
}

function createHeroes() {

    let hero1 = new Hero('hero-hero', generateLifeCount()),
        hero2 = new Hero('hero-superhero', generateLifeCount()),
        hero3 = new Hero('superhero-superhero', generateLifeCount()),
        heroesArr = [hero1, hero2, hero3],
        selectedHeroes = [];

    selectedHeroes[0] = heroesArr[generateRandomArrItem(heroesArr)];
    selectedHeroes[1] = heroesArr[generateRandomArrItem(heroesArr)];

    return selectedHeroes;
}

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function checkHeroesLifes(hero1, hero2) {

    displayGameLog(hero1, hero2);

    if (hero1.life === 0 || hero1.life < 0 ||
        hero2.life === 0 || hero2.life < 0) {

        if (hero1.life > hero2.life) {
            console.log(`Hero ${hero1.name} win!`);
            process.exit();
        } else {
            console.log(`Hero ${hero2.name} win!`);
            process.exit();
        }
    } else {
        return;
    }
}

function displayGameLog(hero1, hero2) {
    console.log('\033c');
    console.log(`Hero: ${hero1.name}, life count: ${hero1.getLifeValue()}
    Hero: ${hero2.name}, life count: ${hero2.getLifeValue()}`);
}

function initGame() {
    let heroes = createHeroes(),
        hero1 = heroes[0],
        hero2 = heroes[1];
    setInterval(function () {
        handleKeypress(hero1, hero2)
    }, 1000);
}

initGame();
