const draw = (height = 4, pipeWidth = 2) => {
	const width = height * 2 + pipeWidth,
		leftBorder = height + 1,
		rightBorder = height + pipeWidth;

	for(let i = 1; i <= height; i++) {
		let line = '';

		for(let j = 1; j <= width; j++) {
			let condition = j >= leftBorder - i && j < leftBorder || j > rightBorder && j <= rightBorder + i;
			line += condition ? '#' : ' ' ;
		}
		console.log(line, i);
	}
}

draw();
draw(8);
draw(8, 4);