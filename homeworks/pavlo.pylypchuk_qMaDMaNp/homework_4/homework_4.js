let a = ['ma',"mama"];
let b = a[0].split(''); // change index here to change the world =)
let mSaver = [],
	aSaver = [];
	

for(let i = 0; i < a.length; i++){
		console.log(b)
		b = a[i];
		console.log(b)
		for(let x =0; x < b.length; i++){

			if(b[i] == "m") {
				mSaver.push("1");
				console.log(mSaver);
			}

			if(b[i] == "a"){
				aSaver.push("2")
				console.log(aSaver);
			}
		}
}


