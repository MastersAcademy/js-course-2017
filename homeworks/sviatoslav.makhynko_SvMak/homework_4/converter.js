// Input data
let data = ['Hello', 'Alpha', 'browser', 'GNOME', '-#455d', undefined, 1235, 'marmelad', 'aA'];

// ------------------------ v1 with regexp ----------------------------

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

// ------------------------ v2 without regexp ----------------------------

function convertTwo(data) {

    data = data.filter(item => {
        if (typeof item === 'string') {
            return item;
        }
    });

    data = data.map(item => {
        let mCount = 0,
            aCount = 0;

        item = item.toLowerCase();

        for (let i = 0; i < item.length; i++) {
            if (item[i] === 'm') {
                mCount++
            } else if (item[i] === 'a') {
                aCount++
            }
        }

        switch (true) {
            case (mCount === 0 && aCount === 0):
                return 1;
                break;
            case (mCount === aCount):
                return 1;
                break;
            default:
                return 0;
        }

    });

    return data;
}

// ------------------- Show result ----------------------
let resultOne = convert(data);
let resultTwo = convertTwo(data);

console.log(resultOne);
console.log(resultTwo);
