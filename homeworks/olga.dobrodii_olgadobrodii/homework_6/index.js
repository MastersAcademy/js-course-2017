let inputNumber = 2;
let outNumber = 12;

let freezeFactory = (number) => {
  let countCall = 0;

  return function(){
    countCall++;

    if (countCall%number === 0) {
      console.log(number);
    }
  }
};

let frozen = freezeFactory(inputNumber);

for (let i=0; i < outNumber; i++ ) {
  frozen();
}