const makeString = (integer) => (int) => ' '.repeat(integer) + '#'.repeat(int) + '  ' + '#'.repeat(int) + '\n';

const printTower = (int, integer) => int ? printTower(int - 1, integer) + makeString(integer - int)(int) : '';

const printTowerAndTitle = (integer) => `Height: ${integer} \n` + printTower(integer, integer);

console.log(printTowerAndTitle(2));
console.log(printTowerAndTitle(3));
console.log(printTowerAndTitle(4));
console.log(printTowerAndTitle(5));
console.log(printTowerAndTitle(6));
console.log(printTowerAndTitle(7));
