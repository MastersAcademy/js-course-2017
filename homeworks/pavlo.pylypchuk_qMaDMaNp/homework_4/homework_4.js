let a = ['meomeoi', 'petya', 'masa', 'julik', 'master academy'];
let b = a[0].split(''); // change index here to change the world =)
let mSaver = [];
let aSaver = [];
let answer = [];

for (let i = 0; i < a.length; i++) {
    b = a[i];
    (function Savers(chars) {
        for (let i = 0; i < chars.length; i++) {

            if (b[i] == "m") {
                mSaver.push("1");
            }

            if (b[i] == "a") {
                aSaver.push("1");
            }
        }
    })(b);

    (function Compare(mArg, aArg) {
        mLength = mArg.length;
        aLength = aArg.length;

        if (mLength != aLength) {
            answer.push("0");
        }

        if (mLength == aLength || (mLength == 0 && aLength == 0)) {
            answer.push("1");
        }
    })(mSaver, aSaver);

}
console.log(answer);