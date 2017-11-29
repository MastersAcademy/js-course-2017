const randomStringArray = [
    "first",
    "second",
    "third",
    "fourth",
    "masters academy",
    "mmmortal combat"
];

const interpretationArray = [];

function collation(randomStringArray) {

    for (let i = 0; i < randomStringArray.length; i++) {
        let interpretationString = randomStringArray[i].toLowerCase(),
            countM = interpretationString.indexOf("m"),
            countA = interpretationString.indexOf("a"),
            sumM = 0,
            sumA = 0;

        while (countM != -1) {
            sumM++;
            countM = interpretationString.indexOf("m", countM + 1);
        }

        while (countA != -1) {
            sumA++;
            countA = interpretationString.indexOf("a", countA + 1);
        }

        if (sumM != sumA) {
            interpretationArray.push(0);
        } 
        
        else interpretationArray.push(1);

    }
  console.log(interpretationArray);
}
collation(randomStringArray);
