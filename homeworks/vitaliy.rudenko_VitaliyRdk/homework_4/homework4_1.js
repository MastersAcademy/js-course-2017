let inputData = [
    'first',
    'second',
    'third',
    'fourth',
    'masters academy',
    'MA',
    'maaaaa',
    'atest'
];

function getLowercaseMass (inputData){
    for (let i = 0; i < inputData.length; i++){
        inputData[i] = inputData[i].toLowerCase();
    }
    return inputData;
}

function getCheckValue(inputData){
    let counterM;
    let counterA;
    let line;
    let resultMass = [];
    for (let i = 0; i < inputData.length; i++){
        line = inputData[i];
        counterA = 0;
        counterM = 0;
        for (let j = 0; j < line.length; j++){
            if (line.charAt(j) == 'm'){
                counterM++;
            }else if (line.charAt(j) == 'a'){
                counterA++;
            }
        }
        console.log(line);
        console.log('Sum of elements in line: ' + 'M - '+ counterM + ' A - ' + counterA);
        console.log(' ');
        if (counterA == counterM || counterM == 0 && counterA == 0){
            resultMass += 1;
        }else{
            resultMass += 0;
        }
    }
    return resultMass;
}

getLowercaseMass(inputData);
let result = getCheckValue(inputData);
console.log('Result: ' + result);
