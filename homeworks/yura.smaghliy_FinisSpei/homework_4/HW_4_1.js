let kol_A = 0;
let kol_M = 0;
let start_array = ['first', 'second', 'third', 'fourth', 'Masters acAdemy'];
let split_array = [];
let final_array = [];

for (let t = 0; t < start_array.length; t++){
    split_array[t] = start_array[t].split('');
    console.log(split_array[t]);
    for (let n = 0; n < split_array[t].length; n++){
        if (split_array[t][n] == 'a'|| split_array[t][n] == 'A') kol_A++;
        if (split_array[t][n] == 'm'|| split_array[t][n] == 'M') kol_M++;
    }
    if (kol_A == 0 && kol_M == 0) {final_array.push(1);} else
    {if (kol_A !== kol_M) {final_array.push(0);} else
    {final_array.push(1);}}
    kol_A = 0;
    kol_M = 0;
}
console.log(start_array);
console.log(final_array);

//способ выполнения №1 цикл
