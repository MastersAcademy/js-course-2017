let card = '4561 2612 1234 5464';
let methodLuna = function (card){        
    let newCard = card.replace(/\s|-/g, '');
    let sum_of_multiplied = 0;
    let sum = 0;
    let result = 0;      
    let cardValid = function(card){
        if (newCard.search(/\D/) !=-1) return null;
        if (newCard.search(/\d/) !=-1 ) return newCard;        
    }; 
    let pairingCard = function(card){
        return newCard.length % 2;  
    };  
    let pairing = pairingCard();
    let lunaCardMultiply = function(card){     
        for(let i = pairing; i < newCard.length; i = i + 2){
            let numeral = parseInt(newCard[i]);
            let multiply = numeral * 2; 
            if (multiply > 9){
                multiply = multiply - 9;
            }
            sum_of_multiplied += multiply;
        }
        return sum_of_multiplied; 
    };
    let lunaCardSum = function(card){
        for (let j = pairing + 1; j < newCard.length; j = j + 2 ){
            let numeral_1 = parseInt(newCard[j]);
            sum += numeral_1;
        }   
        return sum;
    };
    let lunaCard = function (card){
        let sumCard =  lunaCardMultiply(sum_of_multiplied) + lunaCardSum(sum);
        return sumCard % 10 === 0;                
    };
    return lunaCard(card);
};  
console.log(methodLuna(card));