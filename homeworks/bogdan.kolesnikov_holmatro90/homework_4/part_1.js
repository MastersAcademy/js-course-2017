let leterCount = ['first', 'second', 'third', 'fourth', 'Masters Academy'];
let countResult = [];

let countingLeter = function (count) {
    count.forEach((value) => {

        let countA = 0;
        let countM = 0;
        let leveler = value.toLowerCase();

        for (let i = 0; i < leveler.length; i++) {
            let countingA = (leveler.charAt(i) === 'a');
            let countingM = (leveler.charAt(i) === 'm');
            if (countingA) {
                countA++;
            } else if (countingM) {
                countM++;
            }
        }

        if (countM === countA) {
            countResult.push(1);
        } else {
            countResult.push(0);
        }
    });
    console.log(countResult);
};
countingLeter(leterCount);



