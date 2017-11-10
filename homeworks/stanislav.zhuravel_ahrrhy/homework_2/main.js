function printPyramid (height) {
		var str = '',
			str1 = '',
			spcs = '',
			pyramidLvl;
	if (height<2) {
		console.log('need at least 2');
	}else if ((typeof height) !== 'number') {
		console.log('need a number');
	}else {
		for (let i = 1; i <= height ; i++) {
			str1 += '#';
			for (let j = 0; j < (height - str1.length); j++ ) {

				str = '1' + str1;
			}
			pyramidLvl = str + "  " + str1;
			console.log(pyramidLvl);
		}
	}
}
printPyramid(4);