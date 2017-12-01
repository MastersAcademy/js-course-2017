let card = '4561 2612 1234 5464';
let method_Luna = function (card){        
    let newCard = card.replace(/\s|-/g, '');
    let pairing;
    let multiply = 0; 
    let sum_of_multiplied = 0;
    let sum = 0;
    let sumCard = 0;
    let result = 0;      
    let cardValid = function(card){
        if (newCard.search(/\D/) !=-1) return null;
        if (newCard.search(/\d/) !=-1 ) return newCard;        
    }; 
    let pairingCard = function(){
        if(newCard.length % 2 === 0) pairing = 0;  
        else pairing = 1;
        return pairing;
    };  
    pairing = pairingCard(pairing);
    let lunaCard_multiply = function(){     
        for(let i = pairing; i < newCard.length; i = i + 2){
            let numeral = parseInt(newCard[i]);
            multiply = numeral * 2; 
            if (multiply > 9){
                multiply = multiply - 9;
            }
            sum_of_multiplied += multiply;
        }
        return sum_of_multiplied; 
    };
    let lunaCard_sum = function(){
        for (let j = pairing + 1; j < newCard.length; j = j + 2 ){
            let numeral_1 = parseInt(newCard[j]);
            sum += numeral_1;
        }   
        return sum;
    };
    let lunaCard = function (){
        sumCard =  lunaCard_multiply(sum_of_multiplied) + lunaCard_sum(sum);
        if (sumCard % 10 === 0) card = true;
        else card = false;
        return card;            
    };
    return lunaCard(card);
};  
console.log(method_Luna(card));


