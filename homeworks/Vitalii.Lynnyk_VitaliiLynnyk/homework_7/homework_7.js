class Hero{
    constructor(name, lifeValue){
        this.name = name;
        if(!lifeValue){
            this.lifeValue = 150;
        }else{
            this.lifeValue = lifeValue;
        }
    }
    getLifeValue(){
        return this.lifeValue;
    }
    getName(){
        return this.name;
    }
    kick(otherHero){
        otherHero.lifeValue -= 5;
    }
    shot(otherHero){
        otherHero.lifeValue -= 15;
    }
}

 class SuperHero extends Hero{
    constructor(name, lifeValue){
        super(name, lifeValue);
    }
    kick(otherHero){
        otherHero.lifeValue -= 10;
    }
    shot(otherHero){
        otherHero.lifeValue -= 25;
    }
 }

function getRandomArbitary(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createHeroes(){
    let heroeNames = ["BATMAN","SUPERMAN","WONDER WOMAN","IRON MAN","BLACK WIDOW","HAWKEYE","SPIDERMAN","Daenerys Targaryen","Ragnarr Lodbrok","Yoda"];
    let rand = getRandomArbitary(0,10);
    if(rand % 2 === 0){
        return new Hero(heroeNames[rand],rand*5+100);
    }else{
        return new SuperHero(heroeNames[rand],rand*5+100);
    }
}

function checkInformation(firstH,secondH){
    if(firstH.getLifeValue() <= 0){
        console.log(secondH.getName(),"won with ",secondH.getLifeValue()," hp");
        process.exit(0);
    }
    if(secondH.getLifeValue() <= 0){
        console.log(firstH.getName(),"won with ",firstH.getLifeValue()," hp");
        process.exit(0);
    }
}


if(process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}

let firstHero;
let secondHero;

process.stdin.on('readable', () => {
    let key = String(process.stdin.read());
    if (!key) return;
    let str = String(key).toLocaleLowerCase();

    switch (str) {
        case 'n':
            firstHero = createHeroes();
            secondHero = createHeroes();
            console.log("heroes are created");
            break;
        case 'q':
            checkInformation(firstHero,secondHero);
            firstHero.kick(secondHero);
            console.log(firstHero.getName(),"kicked ",secondHero.getName()," ",secondHero.getLifeValue()," left");
            break;
        case 'w':
            checkInformation(firstHero,secondHero);
            firstHero.shot(secondHero);
            console.log(firstHero.getName(),"shoted ",secondHero.getName()," ",secondHero.getLifeValue()," left");
            break;
        case 'o':
            checkInformation(firstHero,secondHero);
            secondHero.kick(firstHero);
            console.log(secondHero.getName(),"kicked ",firstHero.getName()," ",firstHero.getLifeValue()," left");
            break;
        case 'p':
            checkInformation(firstHero,secondHero);
            secondHero.shot(firstHero);
            console.log(secondHero.getName(),"shoted ",firstHero.getName()," ",firstHero.getLifeValue()," left");
            break;
        case 'e':
            console.log("exit");
            process.exit(0);
            break;
        default:
            console.log(" Please enter a key : \n n - start \n first player q - kick w - shot \n second player o - kick p - shot \n e - exit")
            break;
    }
});
