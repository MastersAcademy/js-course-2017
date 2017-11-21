let myArray = new Array('first', 'second', 'third', 'fourth', 'masters academy', 'M', 'mA', 'op');

let save_Array, newArray,  v = 0, u = 0;

for (let i = 0; i < myArray.length; i++){
   
    save_Array = myArray[i];
    newArray = save_Array.match(/[\S\s]{1,1}/g);
    

    for(let j = 0; j < newArray.length; j++){

        if ((newArray[j] == 'm') || (newArray[j] == 'M')){
            v++;
        }
        if ((newArray[j] == 'a')|| (newArray[j] == 'A')){
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
