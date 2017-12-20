function Animal (lovelyFood) {

    this.lovelyFood = lovelyFood;

    this.initHunger();

}

Animal.prototype = {

    feed (food) {

        if(this.notHungry){

            console.log('I\'m not hungry');

            return;

        }

        if(food == this.lovelyFood){

            console.log('Om-nom-nom');

        }
        else{

            console.log('Om-nom');

        }

        this.notHungry = true;

        this.initHunger();

    },

    initHunger () {

        this.hungerTimeout && clearTimeout(this.hungerTimeout);

        this.hungerTimeout = setTimeout(()=>{

            this.notHungry = false;

            console.log('Feed me please');

        }, 5000);

    }

};


function Dog (lovelyFood, name) {

    Animal.call(this, lovelyFood);

    this.name = name;

}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function () {

    console.log('Woof-woof');

};

Dog.prototype.greet = function () {

    this.speak();

    console.log(`My name is ${this.name}`);

};

let myDog = new Dog('Beacon', 'Joy');

myDog.feed('Bread');

myDog.feed('Beacon');

myDog.greet();

