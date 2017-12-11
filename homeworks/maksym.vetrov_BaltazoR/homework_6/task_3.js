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


function objectLogger() {
    let output;
    return function bypass(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof (obj[key]) === 'object') {
                    //console.log(obj[key]);
                    output = obj[key];
                    bypass(obj[key]);
                }
            }
        }
        return output;
    };
}

let obj1 = objectLogger();
console.log(obj1(data));


let obj2 = objectLogger();
console.log(obj2(data1));