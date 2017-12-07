function freezeFactory (numeral) {
    
    return function (name = numeral) {
        for (let i = 0; i < numeral; i ++){
            console.log(numeral);
        }
    };   
}
  
let frozen = freezeFactory(4); 
frozen();
