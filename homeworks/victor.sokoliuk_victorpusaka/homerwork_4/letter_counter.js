	//Word list array it stores a sample of words
	let wordList = ['javascript', 'mathematics', 'algorithm', 'jazzman', 'magician'];
	
	// Variables for storing results and comparing
	let letterA = 0;
	let letterM = 0;
	let resultValue = [];
	
	//Making a random choice from an array
	let randomWord = wordList[Math.floor(Math.random() * wordList.length )];
	
	
	//The main script cycle. It arches the str array 
	for (i = 0; i < randomWord.length; i++ ) {
		let wordCount = randomWord.charAt(i);
		
	//Check the availability of necessary elements
		if (wordCount == 'a') {
			letterA++;			
		}else if (wordCount == 'm'){
			letterM++;
		}
	}
	
	// Compare the original variables
	if (letterA !== letterM) {
		resultValue.push(0); 
		}else if (letterA == letterM) {
			resultValue.push(1); 
		}else if (letterA == 0 && letterM == 0) {
			resultValue.push(1);
		}