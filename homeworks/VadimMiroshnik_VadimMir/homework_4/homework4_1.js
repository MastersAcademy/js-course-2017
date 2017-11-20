let myArray = new Array('first', 'second', 'third', 'fourth', 'masters academy', 'M', 'mA', 'op');
let x = myArray.length;
let b, s, arr, c, v = 0, u = 0;

for (let i = 0; i < x; i++){
   
    b = myArray[i];
    arr = b.match(/[\S\s]{1,1}/g);
    c = arr.length;

    for(let j = 0; j < c; j++){

        if ((arr[j] == 'm') || (arr[j] == 'M')){
            v++;
        }
        if ((arr[j] == 'a')|| (arr[j] == 'A')){
            u++;
        }
        if(v != u){
            myArray[i] = 0;
        }
        if(v == u){
            myArray[i] = 1;
        }
        if(v == 0 && u == 0){
            myArray[i] = 1;
        }
    }
    v = 0;
    u = 0;

}
console.log(myArray);
