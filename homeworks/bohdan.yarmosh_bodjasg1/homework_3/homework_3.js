str = ["first", "second", "third", "fourth", "masters academy"];

// // На вход приходит любой массив строк, который может содержать любой символ.
// // В каждом елементе массива нужно сравнить количество букв "m" и "a". 
// // Метод должен вернуть масив чисел 0 и 1 и не должен учитывать регистр букв.

// // 0 - если не равное кол-во "m" и "a"
// // 1 - если равное кол-во "m" и "a"
// // 1 - если нет "m" и "a"

function count(string){
    arr = [];
    let val;
    for(let i = 0; i < string.length ;i++ ){
        let elem = string[i];
        let row = 0;
        let row2 = 0;
        for (let i = 0; i < elem.length; i++){
            if (elem[i] == "m") {
                row += 1; 
            }else if( elem[i] == "a") {
                row2 += 1;
            }
        }
    if (row == 0 && row2  == 0 ){
        val = 1;
    } 
    else if(row == row2){
        val = 1;
    }
    else{
        val = 0;
    }
    arr.push(val);
}   
console.log(arr);
};


function count2(arreys){
    let arr2 = [];
    let sort = arreys.map((name) => {
        return name.split('');
    })

    let sort2 = sort.forEach( item => {
        let valueM = 0;
        let valueA = 0;
        for(let i = 0; i < item.length; i++){
            if(item[i] == "m"){
                valueM += 1;
            } 
            else if (item[i] == "a"){
                valueA += 1;
            }
        }
        if (valueM == 0 && valueA  == 0 || valueM == valueA){
            val = 1;
        } 
        else{
            val = 0;
        }
        arr2.push(val);
    })
    console.log(arr2);
};

count(str);

count2(str);




