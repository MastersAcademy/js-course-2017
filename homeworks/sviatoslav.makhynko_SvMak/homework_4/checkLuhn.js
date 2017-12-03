// Input data
//let data = '4556307054595052 :;""--'; // 16 chars
let data = '346056845905673'; // 15 chars

// Function checking input data
const validator = data => {
    const patternTest = /[^.,/'":;\-=+\s\d]/g,
        patternMatch = /\d/g;

    let validData;

    if (typeof data !== 'string') {
        data+='';
    }

    if (patternTest.test(data)) {
        console.log('Error: unexpected char');
        return null;
    }

    validData = data.match(patternMatch);
    return validData;
}

// Function implements the Luhn algorithm
const checkLuhn = data => {
    let validData = validator(data),
        checkSum;

    if (validData === null) {
        return null;
    }

    checkSum = validData.reduceRight((sum, current, i, arr) => {
        sum = parseInt(sum, 10);
        current = parseInt(current, 10);

        let even = arr.length%2;

        if (i%2 === even) {
            current*=2;

            if (current > 9) {
                current -= 9;
            }
        }

        return sum+current;
    });

    if (checkSum%10 === 0) {
        return true;
    }

    return false;
}

// Show result
let result = checkLuhn(data);

console.log(result);
