let a = ['meomeoi', 'petya', 'masa', 'julik','master academy'];
let b = a[0].split(''); // change index here to change the world =)
let mSaver = [];
let aSaver = [];


(function Savers(chars) {
	for(let i = 0; i < chars.length; i++) {

		if(b[i] == "m") {
			mSaver.push("1");
		}

		if(b[i] == "a") {
			aSaver.push("1");
		}
	}
})(b);

(function Compare(mArg, aArg) {
		mLength = mArg.length;
		aLength = aArg.length;

		if(mLength != aLength){
			console.log("0");
		}

		if(mLength == aLength || (mLength == 0 && aLength == 0)){
			console.log("1");
		}
})(mSaver, aSaver);

