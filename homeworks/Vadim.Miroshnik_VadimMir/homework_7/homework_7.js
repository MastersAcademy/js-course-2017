let player1 = 0;
let player2 = 0;
let hero = 0;
let superHero = 0;

class Hero {
    constructor(name, life){
        this.name = name;
        this.life = life;
        this.kick = 5;
        this.shot = 15;  
    }
    kickMethod(otherHero){
        otherHero.life -= this.kick;
    }
    shotMethod(otherHero){
        otherHero.life -= this.shot;
    }
    getLifeValue(){
        return this.life;
    }
}

class SuperHero extends Hero{
    constructor(name, life){
        super(name, life);
        this.kick = 10;
        this.shot = 25;
    }
    kickMethod(otherHero){
        otherHero.life -= this.kick;
    }
    shotMethod(otherHero){
        otherHero.life -= this.shot;
    }
}

function start(){
    player1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    player2 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

    if (player1 === 1){
        hero = new Hero('Hero', Math.floor(Math.random() * (130 - 100 + 1)) + 100);
    }else{
        hero = new SuperHero('SuperHero', Math.floor(Math.random() * (150 - 131 + 1)) + 131);
    }
        
    if (player2 === 1){
        superHero = new Hero('Hero', Math.floor(Math.random() * (130 - 100 + 1)) + 100);
    }else{
        superHero = new SuperHero('SuperHero', Math.floor(Math.random() * (150 - 131 + 1)) + 131);
    }
    console.log(`pleyer 1 ${hero.name} his life ${hero.life}, use 'q' from kick and 'w' from shot.`);
    console.log(`pleyer 2 ${superHero.name} his life ${superHero.life}, use 'o' from kick and 'p' from shot.`);
}

function finish(){
    if (hero.life <= 0){
        console.log(`Won player 2 with name "${superHero.name}" and lives he has left ${superHero.getLifeValue()}`);
        process.exit(0);
    }else if (superHero.life <= 0){
        console.log(`Won player 1 with name "${hero.name}" and lives he has left ${hero.getLifeValue()}`);
        process.exit(0);
    }
}

process.stdin.setRawMode ( true );
process.stdin.on('readable', () => {
    const key = process.stdin.read();

    if (!key) return;

    const str = String(key);

    switch (str) {
        case 'null':
            break;
        case 'n':
            start();
            break;
        case 'q':
            hero.kickMethod(superHero);
            finish();
            console.log(`${hero.name} kick on ${hero.kick} from ${superHero.name} rest ${superHero.getLifeValue()}`);
            break;
        case 'w':
            hero.shotMethod(superHero);
            finish();
            console.log(`${hero.name} shot on ${hero.shot} from ${superHero.name} rest ${superHero.getLifeValue()}`);  
            break;
        case 'o':
            superHero.kickMethod(hero);
            finish(); 
            console.log(`${superHero.name} kick on ${superHero.kick} from ${hero.name} rest ${hero.getLifeValue()}`); 
            break;
        case 'p':
            superHero.shotMethod(hero);
            finish(); 
            console.log(`${hero.name} shot on ${superHero.shot} from ${hero.name} rest ${hero.getLifeValue()}`);  
            break;
        case 'e':
            process.exit(0);
            break;
        default:
            console.log(str);
    }

});

console.log('Welcome here, press n for start');
