var a = 8, c = a - 1, e = '  ', s = '#';
for (let i = 0; i < a; i++) {
    e = s + e + s;
    let l = e;
    let t = c;

    while (t > 0) {
        l = ' ' + l;
        t--;
    }
    console.log(l);
    c -= 1;
}
console.log('height = ' + a);
/*a = height
  s = symbol
  e = empty space
  c = counter*/
