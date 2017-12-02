const arrFilter = arr => arr.map(item => {
	let matchM = item.match(/m/ig),
		matchA = item.match(/a/ig);

	if(!matchM && !matchA) return 1;
	if(matchM && matchA && matchM.length === matchA.length) return 1;
	return 0;
})

const arr = ["first", "second", "third", "fourth", "masters academy"];

console.log(arrFilter(arr));


const card = '341347208470578';

const luna = card => {
	if(/[^0-9\.,\/'":;-=+]/.test(card)) return null;
	
	const arr = card.match(/[0-9]/g),
		length = arr.length;

	let result = 0;
	
	arr.forEach((number, i) => {
		if(length%2 == i%2) {
			number *= 2;
			if(number > 9) {
				number = number - 9;
			}
		}
		result += +number;
	})

	return result%10 === 0;

}

console.log(luna(card));