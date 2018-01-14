let myCar = {};

// let myCar = Object.create(Object);
//
// let myCar = new Object();


myCar.make = 'Ford';

myCar.model = 'Mustang';

myCar.year = 1969;

// console.log(myCar);



let myObj = new Object();

let str = 'myString';

let rand = Math.random();

let obj = new Object();

let obj1 = new Object();

myObj.type              = 'Dot syntax';

myObj['date created']   = 'String with space';

myObj[str]              = 'String value';

myObj[rand]             = 'Random Number';

myObj[obj]              = 'Object';

myObj[obj1]             = 'Object1';

myObj['']               = 'Even an empty string';

// console.log(myObj);

let propertyName = 'make';

myCar[propertyName] = 'Ford';

propertyName = 'model';

myCar[propertyName] = 'Mustang';

// console.log(Object.keys(myObj));



// for(let key in myCar){
//
//     if(myCar.hasOwnProperty(key)){
//
//         console.log(`${key} : ${myCar[key]}`);
//
//     }
//
// }



function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let car1 = new Car('Mitsubishi', 'Galant', 2002);

let car2 = new Car('Lexus', 'RX', 2007);

console.log(car1);


let {make, model} = car1;

// console.log(make);

// console.log(model);

(
    {
        color : car1.color,

        fuel : car1.fuel
    }

    =

    {
        color : 'red',

        fuel : 'gasoline'
    }
);

// console.log(car1);


Object.defineProperty(car1, 'name', {

    get: function() {

        return `${this.make} ${this.model}`;

    },

    set: function(name) {

        let parts = name.split(' ');

        this.make = parts[0];

        this.model = parts[1];

    }
});

car1.name = 'Audi TT';


console.log(car1.name);

console.log(car1);


function personFactory (name, age, gender) {

    return {

        name : name,

        age : age,

        getGender () {

            return gender;

        },

        toString () {

            return `${this.name}, ${this.age}, ${this.getGender()}`;

        }

    };

}

let male = personFactory('Clark', 20, 'male');

let female = personFactory('Rose', 20, 'female');

console.log(male.toString());

console.log(female.toString());

console.log(male.gender);
