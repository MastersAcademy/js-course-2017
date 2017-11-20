let namberCard = '4532-2538-4117-1915';
let massNamberCard = [];
let notVariableSymbol = /[a-zA-Zа-яА-Я]/;
let status;
let sum = 0;
let number;

function getValidMassNumberCard(namberCard){
    if (notVariableSymbol.test(namberCard)){
        status = 'null';
        return status;
    }
    namberCard = namberCard.replace(/\D+/g,'');
    for (let i = 0; i < namberCard.length; i++){
        massNamberCard[i] = namberCard.charAt(i);
        massNamberCard[i] = parseInt(massNamberCard[i]);
    }
    return massNamberCard;
}

function getValidCard(massNamberCard){
    massNamberCard.reverse();
    for (let j = 0; j < massNamberCard.length; j++){
        number = massNamberCard[j];
        if(j%2 == 1){
            number *= 2;
        }
        if (number > 9){
            sum += number - 9;
        } else {
            sum += number;
        }
    }
    status = sum % 10 == 0 ? status = 'true' : status = 'false';
    return status;
}

getValidMassNumberCard(namberCard);
if (status === 'null'){
    console.log('Status: ' + status);
}else{
    getValidCard(massNamberCard);
    console.log('Status: ' + status);
}
