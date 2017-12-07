let arr = ["first", "second", "third", "fourth", "masters academy"];

function handleArray(arr) {
    let chars = [];

    for (let i = 0; i < arr.length; i++) {
        chars.push(parseString(arr[i].toLowerCase()));
    }

    console.log(chars);
    return chars;

}

function parseString(string) {
    let arrOfChars = [];

    for (let i = 0; i < string.length; i++) {
        arrOfChars[i] = string[i];
    }

    return checkArrOfChars(arrOfChars);
}

function checkArrOfChars(arr) {
    let charsArr = [], count = 0, result = [];

    for (let i = 0; i < arr.length; i++) {
        if (filterArr(arr[i]) !== undefined) {
            charsArr[count] = filterArr(arr[i]);
            count++;
        }
    }

    return returnResult(charsArr);
}

function filterArr(char) {
    if (char === 'm' || char === 'a') {
        return char;
    }
}

function returnResult(chars) {
    let result = [], aAmount = 0, mAmount = 0;

    for (let i = 0; i < chars.length; i++) {

        if (chars[i] === 'a') {
            aAmount++;
        } else if (chars[i] === 'm') {
            mAmount++;
        }
    }

    if (aAmount > 0 && mAmount > 0 && aAmount === mAmount) {
        result = 1;
    } else if (aAmount !== mAmount) {
        result = 0;
    } else {
        result = 1;
    }

    return result;

}

handleArray(arr);
