class Hero {
    constructor(name, life) {
        this.name = name;
        this.life += 150;   
    } 
    shot(otherHero) {
        otherHero.life -=15;
    };
    kick(otherHero) {
        otherHero.life -=5;
    };
    getLifeValue() {
       return this.life;
    }; 
}

class SuperHero extends Hero {
    shot(otherHero) {
        otherHero.life -=25;
    };
    kick(otherHero) {
        otherHero.life -=10;
    };
}    