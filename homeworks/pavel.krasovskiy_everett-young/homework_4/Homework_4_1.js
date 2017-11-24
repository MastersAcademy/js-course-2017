const ARRAY_OF_STRINGS = ['firAst','second','third','fourth','masters academy'];

const firstCountingCharacters = arrayStrings => {
    let lastAnswer = [];
    arrayStrings.forEach( current => {
        let countM = current.split(/m/i).length-1;
        let countA = current.split(/a/i).length-1;

        countM != countA ? lastAnswer.push(0) : lastAnswer.push(1);
    });
    return lastAnswer;
};


const secondCountingCharacters = arrayStrings => {
    let lastAnswer = [];
    arrayStrings.forEach( current => {
        current = current.toLowerCase();
        let countM = 0;
        let countA = 0;
        let position = 0;

        while ( position != -1){
            let foundPosition = current.indexOf('m', position);
            if (foundPosition == -1) break;
            countM++;
            position++;
        }

        while ( position != -1){
            let foundPosition = current.indexOf('a', position);
            if (foundPosition == -1) break;
            countM++;
            position++;
        }

        countM != countA ? lastAnswer.push(0) : lastAnswer.push(1);
    });
    return lastAnswer;
};

console.log( firstCountingCharacters(ARRAY_OF_STRINGS) );
console.log( secondCountingCharacters(ARRAY_OF_STRINGS) );
