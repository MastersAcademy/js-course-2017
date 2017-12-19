class Animal {

    constructor (lovelyFood) {

        this.lovelyFood = lovelyFood;

        this.initHunger();

    }

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

    }

    initHunger () {

        this.hungerTimeout && clearTimeout(this.hungerTimeout);

        this.hungerTimeout = setTimeout(()=>{

            this.notHungry = false;

            console.log('Feed me please');

        }, 3000);

    }

}

class Dog extends Animal{

    constructor (lovelyFood, name) {

        super(lovelyFood);

        this.name = name;

    }

    speak () {

        console.log('Woof-woof');

    }

    greet () {

        this.speak();

        console.log(`My name is ${this.name}`);

    }

}

let myDog = new Dog('Beacon', 'Joy');

myDog.feed('Beacon');

myDog.feed('Beacon');

myDog.greet();

class MyArray extends Array{

    constructor(){
        super();
    }

    newMethod () {
        console.log(this);
    }

}

let arr = new MyArray();

arr.push(1);

arr.newMethod();

arr.forEach((el) => {
    console.log(el);
});
