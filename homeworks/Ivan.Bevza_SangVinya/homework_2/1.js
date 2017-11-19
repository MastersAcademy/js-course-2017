function hei() {
    var height = document.getElementById('out').value;
    console.log('Height: ' + height);
    if (height < 2) {
        alert ('Enter any positive integer >=2'); 
    }
    else {
        var i = 0, j = 0;
        var bigSpace = '  '; 
        while (i < height) {
            block = '';
            space = ' ';
            for (j = 0; j < height - i; j++) space += ' ';
            for (j = 0; j < i + 1; j++) block += '#';
            console.log(space + block + bigSpace + block);
            i++;
        }
    }
}




