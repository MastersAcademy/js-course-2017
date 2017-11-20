let input, output;
input = [
    'first',
    'second',
    'third',
    'fourth',
    'masters academy'
];
output = input.map(function (item) {
    let searchA = 0;
    let searchM = 0;
    let result;
    result = item.toLocaleLowerCase();
    for (let i = 0; i < result.length; i++) {
        if (result[i] === 'a') searchA += 1;
        if (result[i] === 'm') searchM += 1;
    }
    (searchA !== searchM) ? result = 0 : result = 1;
    return result;
});

console.log(output);