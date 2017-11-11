var block = "#";
var space = " ";
var promptEnter = prompt("What`s the height?");
var height = promptEnter;

if(promptEnter >= 2) {
	console.log("Height:"+ height);
	for(var i = 0; i < height; i++) {
		console.log(space.repeat(promptEnter--) + block.repeat(i+1) + space.repeat(2) + block.repeat(i+1));
	}
} else {
	console.log("Number is not >= 2");
}