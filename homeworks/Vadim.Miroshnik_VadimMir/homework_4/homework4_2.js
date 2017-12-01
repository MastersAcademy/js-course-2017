let card = '4561 2612 1234 5467';
let methodLuna = function (card){        
    let newCard = card.replace(/\s|-/g, '');
    let sumOfmultiplied = 0;
    let sum = 0;
    let result = 0;   
    if (newCard.search(/\D/) !=-1) return null;
    if (newCard.search(/\d/) !=-1 ) { 
        let newCard = card;        
    }
    let pairing = newCard.length % 2;       
    for(let i = pairing; i < newCard.length; i = i + 2){
        let numeral_1 = 0;
        let numeral = parseInt(newCard[i]);
        if (pairing == 0) numeral_1 = parseInt(newCard[i + 1]);
        if (pairing == 1) numeral_1 = parseInt(newCard[i - 1]);
        let multiply = numeral * 2; 
        if (multiply > 9){
            multiply = multiply - 9;
        }
        sumOfmultiplied += multiply;    
        sum += numeral_1;
    }
    let sumCard = sumOfmultiplied + sum;     
    return sumCard % 10 === 0;
};  
console.log(methodLuna(card));