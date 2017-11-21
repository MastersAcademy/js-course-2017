const words = ["first", "second", "third", "fourth", "masters academy"];

console.log(calcLetters(words));


function calcLetters(array) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        let counterM = 0;
        let counterA = 0;
        
        for (let j = 0; j < array[i].length; j++) {
            const letter = array[i][j];
            
            if ('m' === letter.toLowerCase()) {
                counterM = counterM + 1;
            }
            if ('a' === letter.toLowerCase()) {
                counterA = counterA + 1;
            };
        }
        
        if (counterA === counterM) {
            result.push(1);   
        } else {
            result.push(0);
        }
    }
    
    return result;
}