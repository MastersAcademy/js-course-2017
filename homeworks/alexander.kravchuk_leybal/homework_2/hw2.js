let str = '',
	n = 5,
	an = 4 + (n - 1) * 2,
	anPlusOne = an + 1;
	step = 2; 

for (let j = 1; j <= n; j++) {
	let start  = n - j + 1,
	    end = an / 2 + 1 + step / 2;
	for (let i = 1; i <= anPlusOne; i++) {
	    if (i % anPlusOne == 0 && j !== n) {
	        str += '\n\r';
	    } else if (i >= start && i < an / 2) {
	        str += '#';
	    } else if (i > an / 2 + 1 && i <= end) {
	    	str += '#';
	    } else {
	        str += ' ';
	    }
	}
	step += 2;
}
console.log(str); 