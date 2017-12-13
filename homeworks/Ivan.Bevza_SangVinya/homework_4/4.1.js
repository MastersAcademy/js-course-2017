let firstArray = ["Mama", "myla", "utrom", "rano"];
search(firstArray);
function search(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        let counterM = 0;
        let counterA = 0;
        for (let j = 0; j < array[i].length; j++) {
            array[i] = array[i].toLowerCase();
            if (array[i].charAt(j) == "m") {
                counterM++;
            }
            else if (array[i].charAt(j) == "a") {
                counterA++;
            }  
        }
        if ( (counterM == counterA) || ( (counterM == 0) && (counterA == 0) ) ) {
            resultArray[i] = 1;
        }
        else {
            resultArray[i] = 0;
        }
    }
    console.log(resultArray);
}


