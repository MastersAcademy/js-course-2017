let firstSuperVariable = '';

var newVariable;

const FIRST_CONST = 0;

console.log(firstSuperVariable);

{
    let v1 = 3;
    v2 = 4;
    console.log(v1);
    console.log(v2);
}

if(firstSuperVariable){
    console.log('true');
}
else{
    console.log('false');
}

let conditionCheck = firstSuperVariable && firstSuperVariable || firstSuperVariable;

conditionCheck ? console.log('true') : console.log('false');

console.log(v2);

let n = 0;

let k = n++;

console.log(k);

for(let i = 0; i < 10; i++){
    if(i == 5){
        continue;
    }

    console.log(i);
}

let j = 0;
while(j < 10){

    console.log(j);
    j++;

}

do{
    console.log(j);
}while(j < 10);

let obj = ['a', 'b', 'c'];

for(let key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key);
    }
}

for(let val of obj){
    console.log(val);
}

let var5 = 'abc';

var5 += 'd';

var5 += 5;

console.log(var5);

let var6 = 5;

var6 -= '6';

parseInt('6757fsdfsdf45654');

console.log(parseFloat('456456.99sdfsdf'));
console.log(var6);

let obj1 = {
    a : 1,
    b : 1,
    c : 1
};

let {a, b} = obj1;

console.log('a : ' + a);

console.log('b : ' + b);

console.log(3 != '3');

let str = 'asdfsdfsdfs';

console.log(Math.floor(2.75656));

let date = new Date();

