class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = 150;
        this.shot = 15;
        this.kick = 5;
    }
    
    shot(otherHero) {
        return otherHero.hp -= this.shot;
    }
    
    kick(otherHero) {
        return otherHero.hp -= this.kick;
    }
    
    getLifeValue() {
        return this.hp;
    }
}
    
class SuperHero extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.shot = 25;
        this.kick = 10;
    }
    
    shot(otherHero) {
        return otherHero.hp -= this.shot;
    }
    
    kick(otherHero) {
        return otherHero.hp -= this.kick;
    }
}

