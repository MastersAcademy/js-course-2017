/*
Создать фабрику по ограничению количества выполнений функции. Фабричная функция должна принимать в качестве параметра
число и возвращать функцию, которая будет выводить это число каждый раз кратный этому числу.

Пример:

let frozen = freezeFactory(4);

frozen();

frozen();

frozen();

frozen(); //logs 4

frozen();

frozen();

frozen();

frozen(); //logs 4

В примере для наглядности показаны построчные вызовы функции, в реализации задачи для множественных вызовов необходимо
использовать цикл
 */

function call(qt, func) {
    console.log('> Start');
    for (let i = 0; i < qt; i++) {
        func();
    }
    console.log('< End');
}

function freezeFactory(number) {
    let count = 1;
    return function () {
        if (0 === count % number) {
            console.log(`- ${number} -`);
        } else {
            console.log('* * *');
        }
        count++;
    };
}

let frozen = freezeFactory(4);
let frozen2 = freezeFactory(5);

call(10, frozen);
call(15, frozen2);
