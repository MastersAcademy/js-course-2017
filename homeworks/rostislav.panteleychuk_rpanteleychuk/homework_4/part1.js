let arh = ['first', 'second', 'third', 'fourth', 'master'];

let m;
let a;

arh.forEach(function (item, i, arh) {
    m = item.match(/m/ig);
    a = item.match(/a/ig);
    if (m != null && a != null) {
        if (m.length == a.length) {
            console.log(item = 1);
        } else {
            console.log(item = 0);
        }
    } else {
        console.log(item = 0);
    }

});
