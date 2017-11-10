function printPyramid (height) {
		var str = '',
			spc = ' ',
			spcs,
			pyramidLvl;
	if (height < 2) {
		console.log('need at least 2');
	}else if ( (typeof height) !== 'number') {
		console.log('need a number');
	}else {
		for (let i = 1; i <= height ; i++) {
			str += '#';
			spcs = spc.repeat(height-i);
			pyramidLvl = spcs + str + "  " + str;
			console.log(pyramidLvl);
		}
	}
}
printPyramid(4);