let cartNumbr = '5542128261174471';
let sum = 0;
let j = (/\d/);
let r = (/[-.,/'":;=+]/g);
let valid = null;
console.log(cartNumbr);
cartNumbr = cartNumbr.replace(r,'');
// console.log(cartNumbr);

cartNumbr = cartNumbr.split('').reverse();

for (let t = 1; cartNumbr.length > t; t = t+2){
    cartNumbr[t] = cartNumbr[t] * 2;
}

cartNumbr = cartNumbr.join('').split('');

for (t = 0; cartNumbr.length > t; t++){
    if (j.test(cartNumbr[t])) {
        sum = sum +parseInt(cartNumbr[t]);
    } else { break; }
}

if (sum % 10 == 0) {
    valid = true;
} else {
    valid = false;
}

console.log('valide:',valid);
