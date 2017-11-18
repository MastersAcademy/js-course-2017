const array = [
    'Good-bye, my friend, goodbye.',
    'Darling, you\'re in my chest.',
    'Assumed separation',
    'He promises to be ahead of the meeting.',
    'Good-bye, my friend, without a hand, without a single word,',
    'Do not be sad and do not be sad.',
    'In this life it is not new to die,',
    'But to live, of course, is not new.'
];

dataForScanning = (array) => {
    let amountOfM = 0, amountOfA = 0, elem, res = [];

    for (let i = 0; i < array.length; i++) {
        elem = array[i].toLowerCase();
        for (let j = 0; j < elem.length; j++) {
            (elem.charAt(j) === 'm') ? amountOfM++ : (elem.charAt(j) === 'a') ? amountOfA++ : '';
        }
        (amountOfA === amountOfM || amountOfM === 0 && amountOfA === 0) ? res.push(1) : res.push(0);
        console.log(`m: ${amountOfM}, a: ${amountOfA}`)

    }
    return res;
};

const refactoredArr = dataForScanning(array);
console.log('Output ' + refactoredArr);
