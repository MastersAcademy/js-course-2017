const wordsArr = ['eoeoi', 'PeTya', 'maMa', 'julik', 'Master Academy'];
const checkM = /[m]+/g;
const checkA = /[a]+/g;
let answer = [];

function findMA(arr) {
    for (let i = 0; i < wordsArr.length; i++) {
        // gets the word
        let words = arr[i];
        // gets the chars
        let chars = words.split('').toString().toLowerCase();
        // checks for needed chars
        let charM = chars.match(checkM),
            charA = chars.match(checkA);

        // calculates needed chars
        if (charM === null) {
            lengthM = 0;
        } else {
            lengthM = charM.length;
        }
        if (charA === null) {
            lengthA = 0;
        } else {
            lengthA = charA.length;
        }
        // check formula
        // 0 - если не равное кол-во "m" и "a"
        // 1 - если равное кол-во "m" и "a"
        // 1 - если нет "m" и "a"
        if (lengthM == lengthA) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    };
};

findMA(wordsArr);
console.log(answer);
