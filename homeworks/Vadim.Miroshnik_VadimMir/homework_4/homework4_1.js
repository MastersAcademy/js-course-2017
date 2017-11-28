let inputArray = ['first', 'second', 'third', 'fourth', 'masters academy', 'M', 'mA', 'op'];

let outArray = inputArray.map(function (item) {
        let search_A = 0;
        let search_M = 0;
        let result = 0;
        result = item.toLocaleUpperCase();
        for (let i = 0; i < result.length; i++) {
            if (result[i] === 'A') search_A ++;
            if (result[i] === 'M') search_M ++;
        }
       if (search_A !== search_M) result = 0;
        else result = 1;
        return result;
    }); 
   

console.log(outArray);