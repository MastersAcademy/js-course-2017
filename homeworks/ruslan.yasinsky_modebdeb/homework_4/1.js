let astring = ['sdadamd', 'AsdoIp111', 'prekMKkk', 'mssa', 'mma'];
let string = String.prototype.toLowerCase.apply(astring).split(',');
let result = [];
let a = 'a';
let counterA = 0;
let m = 'm';
let counterM = 0;
function counter(str) {
    for (let i = 0; i < str.length; i++) {
        for (let y = 0; y < str[i].length; y++) {
            if (str[i].charAt(y) == a) {
                counterA++;
            } else if (str[i].charAt(y) == m) {
                counterM++;
            }
        }
        if (counterA == counterM || (counterA == 0 && counterM == 0)) {
            result[i] = 1;
        } else {
            result[i] = 0;
        }
    }
    console.log(result);
}
counter(string);
