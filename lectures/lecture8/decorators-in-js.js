function add(a, b) {
    return a + b;
}

function loggerDecorator(target) {
    return function (...args) {
        console.log('arguments: ', ...args);
        return target(...args);
    }
}

add = loggerDecorator(add);

const res = add(2, 4);

console.log(res);

const str = 'hello world ';
let flag = true;

for (let i = 0; i < str.length; i++) {
    if (flag) {
        str[i] = str[i].toUpperCase();
    }

    if (str[i] === ' ') {
        flag = true;
    } else {
        flag = false;
    }
}
