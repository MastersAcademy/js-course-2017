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

    kick(otherHero){
       return otherHero.life -= 25;
    };

}
