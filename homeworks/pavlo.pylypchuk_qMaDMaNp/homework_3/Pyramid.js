let rl = require('readline');
let prompts = rl.createInterface(process.stdin, process.stdout);
const BLOCK = "#";
const SPACE = " ";

prompts.question("What`s the height?", function(tower_h) {
	let height = tower_h;              	
 
	if(tower_h < 2) {
	    console.error("Number is not >= 2");
	process.exit(1);
	}
	
	console.log("Height:"+ height);
	for(let i = 0; i < height; i++) {
	    console.log(SPACE.repeat(tower_h--) + BLOCK.repeat(i+1) + SPACE.repeat(2) + BLOCK.repeat(i+1));
	}
    process.exit(0);		
});
