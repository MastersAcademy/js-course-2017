class Hero {
    constructor(otherHero, lifeAmount = 150, heroName = 'Some hero') {
        this.otherHero = otherHero;
        this.lifeAmount = lifeAmount;
        this.heroName = heroName;
    }

    getLifeValue(hero) {
        return hero.lifeAmount;
    }

    setLifeValue(hero, value) {
        return hero.lifeAmount -= value;
    }

    showWinner(winner) {
        console.log(`${winner.heroName} wins with the reminder of life ${this.getLifeValue(winner)}! Congratulations!!!!`);
        process.exit(0);
    }

    resultsOfFight(hero, injuredHero, fightStyle, lostLife) {
        console.log(`${hero.heroName} ${fightStyle}
                    ${injuredHero.heroName} lost ${lostLife}
                    reminder ${this.getLifeValue(injuredHero)}`);
    }

    shot(hero, injuredHero) {
        this.setLifeValue(injuredHero, 15);

        if(injuredHero.lifeAmount <= 0) {
            this.showWinner(hero);
        } else this.resultsOfFight(hero, injuredHero, 'shot', 15);
    }

    kick(hero, injuredHero) {
        this.setLifeValue(injuredHero, 5);

        if(injuredHero.lifeAmount <= 0) {
            this.showWinner(hero);
        } else this.resultsOfFight(hero, injuredHero, 'kick', 5);

    }

    fight() {
        process.stdin.setRawMode(true);

        process.stdin.on('readable', () => {
            const key = process.stdin.read();

            if (!key) return;
            const strKey = String(key).toLowerCase();

            switch (strKey) {
                case 'o':
                    this.otherHero.shot(this.otherHero, this);
                    break;
                case 'p':
                    this.otherHero.kick(this.otherHero, this);
                    break;
                case 'q':
                    this.shot(this, this.otherHero);
                    break;
                case 'w':
                    this.kick(this, this.otherHero);
                    break;
                case 'e':
                    process.exit(0);
            }
        });
    }
}

class Superhero extends Hero {
    constructor(otherHero, lifeAmount = 150, heroName = 'Some hero') {
        super();
        this.otherHero = otherHero;
        this.lifeAmount = lifeAmount;
        this.heroName = heroName;
    }

    shot(hero, injuredHero) {
        this.setLifeValue(injuredHero, 25);

        if(injuredHero.lifeAmount <= 0) {
            this.showWinner(hero);
        } else this.resultsOfFight(hero, injuredHero, 'shot', 25);
    }

    kick(hero, injuredHero) {
        this.setLifeValue(injuredHero, 10);

        if(injuredHero.lifeAmount <= 0) {
            this.showWinner(hero);
        } else this.resultsOfFight(hero, injuredHero, 'kick', 10);

    }
}

function createHeroes(hero1Name = 'First hero', hero2Name = 'Second hero') {
    let hero1,
        hero2,
        randomAmount = Math.floor( Math.random() * 50 + 100 ),
        hero1Type,
        hero2Type,
        spy = Math.random();

    if ( spy < 0.5) {
        hero1 = new Hero(hero2, randomAmount, hero1Name);
        hero1Type = 'hero';
    } else {
        hero1 = new Superhero(hero2, randomAmount, hero1Name);
        hero1Type = 'superhero';
    }

    spy = Math.random();

    if ( spy < 0.5) {
        hero2 = new Hero(hero1, randomAmount, hero2Name);
        hero2Type = 'hero';
    } else {
        hero2 = new Superhero(hero1, randomAmount, hero2Name);
        hero2Type = 'superhero';
    }

    console.log(`Welcome to fight! Here's our participants:
    ${hero1Name}: ${hero1Type}
    ${hero2Name}: ${hero2Type}
    __________________________________
    To play ${hero1Name} press o and p
    To play ${hero2Name} press q and w
    Press e to exit`);

    hero2.fight();
}

createHeroes('Superman', 'Batman');