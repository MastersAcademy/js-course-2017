let myArray =[
    'first',
    'second',
    'third',
    'fourth',
    'masters academy',
    'mmaa'
];

let resultArray = [];

let result = function(array) {
    array.forEach((element) => {
        let lowCaseElem= element.toLowerCase();
        let countA = 0;
        let countM = 0;
        for (let i = 0; i < lowCaseElem.length; i++) {
            let conditionA = (lowCaseElem.charAt(i) === 'a');
            let conditionM = (lowCaseElem.charAt(i) === 'm');

            if (conditionA) {
                countA += 1;
            } else if (conditionM) {
                countM += 1;
            }
        }

        if(countA === countM){
            resultArray.push(1);
        } else {
            resultArray.push(0);
        }
    });
    console.log(resultArray);
} ;

result(myArray);