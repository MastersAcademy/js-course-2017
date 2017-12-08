let a = ['masa'];
// change index here to change the world =)
let mSaver = [];
let aSaver = [];
let answer = [];

for(let i = 0; i < a.length; i++) {

	let b = a[i].split('');
	console.log(b.length);
	for(let j = 0; j < b[i]; j++) {
		let letter = b[i][j];
		console.log(j)
		if(letter[j] == "m") {
			mSaver.push("1");
		}
		console.log(mSaver); // check
		if(letter[j] == "a") {
			aSaver.push("1a");
		}
		console.log(aSaver); // check
	}

(function Compare(mArg, aArg) {
		mLength = mArg.length;
		aLength = aArg.length;

		if(mLength != aLength){
			answer.push("0");
		}

		if(mLength == aLength || (mLength == 0 && aLength == 0)){
			answer.push("1");
		}
})(mSaver, aSaver);

}
console.log(answer);
