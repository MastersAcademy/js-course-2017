/*
Создать функцию, которая принимает как параметр объект с данными. Функция должна обойти все собственные поля объекта,
включая все вложенные объекты и вывести имена самых глубоких полей c их значением. Порядок вывода не обязательно должен
быть такой как в примере, но обязательно должны быть выведены все имена полей с самой большой глубиной вложенности
 */
let data = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

let data1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 5
        }
    }
};

let obj = {
    a: {
        b: 2
    },
    c: {
        d: 2
    }
};

function objectLogger() {
    let output = [];
    return function bypass(obj) {
        let i = 0;
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof (obj[key]) === 'object') {
                    output [i] = obj[key];
                    ++i;
                    bypass(obj[key]);
                }
            }
        }
        return output;
    };
}

function print(array) {
    for (let j = 0; j < array.length; j++) {
        console.log(array[j]);
    }
}

let obj1 = objectLogger();
print(obj1(data));

let obj2 = objectLogger();
print(obj2(obj));

let obj3 = objectLogger();
print(obj3(data1));