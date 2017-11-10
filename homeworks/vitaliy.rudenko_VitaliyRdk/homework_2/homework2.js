const TRIANGLE_HEIGHT = 4;
const SYMBOL = '#';
var retreat = TRIANGLE_HEIGHT;

console.log('Height: ' + TRIANGLE_HEIGHT);

if(TRIANGLE_HEIGHT >= 2){
    for(let i = 0; i < TRIANGLE_HEIGHT; i++){
        for(var j = 0; j < retreat - 1; j++){
            process.stdout.write(' ');
        }
        for(let k = 0; k < i + 1; k++){
            process.stdout.write(SYMBOL);
        }
        retreat -= 1;
        process.stdout.write(' ');
        process.stdout.write(' ');
        for (let l = 0; l < i + 1; l++){
            process.stdout.write(SYMBOL);
        }
        console.log();
    }
}else{
    console.log('You specified a triangle height less than 2');
}
