const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PHRASES = {
    stringQuery: "Please, enter string: ",
    symbolsQuery: "Please, enter the symbols with a comma (a,b): ",
    result: "Result arr: ",
    errorString: "\x1b[31mThe string must consist of two symbols and more",
    errorSymbols: "\x1b[31mSymbols not valid! (a,b)"
}

rl.question(PHRASES.stringQuery, (str) => {
    if( checkString(str) ) {
        const ARR = stringToArr(str);
        rl.question(PHRASES.symbolsQuery, (symbols) => {
            if ( !checkSymbolsFormat(symbols) ) {
                console.log(PHRASES.errorSymbols);
                rl.close();
            } else {
                const FIRST_SYMBOL = symbols.toLowerCase().split(/,/)[0];
                const SECOND_SYMBOL = symbols.toLowerCase().split(/,/)[1];
                if (checkEquality) {
                    let result =  ARR.map( (val) => {
                        return +compareSymbols(val, FIRST_SYMBOL, SECOND_SYMBOL);
                    });
                    console.log(PHRASES.result, result);
                    rl.close();
                } else {
                    console.log(PHRASES.errorSymbols);
                    rl.close();
                }
            }
        });
    } else {
        console.log(PHRASES.errorString);
        rl.close();
    }
});

function compareSymbols(val, firstSymbol, secondSymbol) {
    let count = 0;
    for (let i = 0; i <= val.length; i++) {
        val[i] === firstSymbol ? count ++ :
            val[i] === secondSymbol ? count -- : count;
    }
    return count !== 0;
}

function stringToArr(str) {
    return str.toLowerCase().split(/ /);
}

function checkString(str) {
    return str.length > 1;
}

function checkSymbolsFormat(symbols) {
    return  /\D\,\D/.test(symbols)
}

function checkEquality(a, b) {
    return a !== b;
}

