
const makeString = (integer) => {
    return (int) => {
        return ' '.repeat(integer) +'#'.repeat(int) + '  ' + '#'.repeat(int) + '\n'
    }
};

const printTower = (integer) => {

    const rec = (int) => {
        return int ? rec(int-1) + makeString(integer-int)(int): ''
    };

    return rec(integer)
};

const printTowerAndTitle = (integer) => {
    return `Height: ${integer} \n` + printTower(integer)
};

console.log(printTowerAndTitle(2));
console.log(printTowerAndTitle(3));
console.log(printTowerAndTitle(4));
console.log(printTowerAndTitle(5));
console.log(printTowerAndTitle(6));
