let arh = ['mmafirst', 'second', 'third', 'fourth', 'master code'];

let m;
let a;

arh.forEach(function (item, i, arh) {
    m = item.match(/m/ig);
    a = item.match(/a/ig);
    if (m != null && a != null) {
        if (m.length == a.length) {
            arh[i] = 1;
        }
        else {
            arh[i] = 0;
        }
    } else {
        arh[i] = 1;
    }

});

console.log(arh);