let someString = 'string object';

let someStringPrototype = Object.getPrototypeOf(someString);

console.log(someStringPrototype);

someStringPrototype.customField = 'Custom Value';

console.log(someString.customField);

let obj = Object.getPrototypeOf(someStringPrototype);

console.log(obj);

obj.customForAll = 'Danger!';

let n = 4;

for(let key in someString){
    if(someString.hasOwnProperty(key)){
        console.log(key);
    }
    console.log(key);
}

console.log(n.customForAll);

let bool = true;
console.log(bool.customForAll);

console.log(Object.getPrototypeOf(null));
