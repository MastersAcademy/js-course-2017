// Input data
let data = ['Hello', 'Alpha', 'browser', 'GNOME', '-#455d', undefined, 1235, 'marmelad', 'aA'];

// Function that converts input to numeric values
const convertItem = data => {
    let mCount = 0,
        aCount = 0;

    if (data === null) {
        return 1;
    }

    data.forEach(item => {

        if (/m/i.test(item)) {
            mCount++;
        } else if (/a/i.test(item)) {
            aCount++;
        }
    });

    if (mCount === aCount) {
        return 1;
    } else {
        return 0;
    }
}

// Function that convert input data
const convert = data => {
    let pattern = /[ma]/gi,
        conversionResult;

    data = data.map(item => {

        if (typeof item !== 'string') {
            item+='';
        }

        item = item.match(pattern);
        conversionResult = convertItem(item);

        return conversionResult;
    });

    return data;
}

// Show result
let result = convert(data);

console.log(result);
