function card(){
    let card = '4561261212345467';
       
    let sum_unpaired = 0;
    let paired_Elemen = 0; 
    let unpaired_Elemen = 0;
    let sum_paired = 0; 
    let sum = 0; 
    let sum_Card;
    let arrayCardNew = [];
        
    arrayCard = card.match(/[\S\s]{1,1}/g);
      
    // Checking for characters.
    for(let h = 0; h < card.length; h++ ){                                        
                                                                                                            
        // If the character is separating, we rewrite it into a new array numbers and symbols.
        if((arrayCard[h] >= 0 && arrayCard[h] <= 9 ) || arrayCard[h] == ' '){        
                                                                                      
            arrayCardNew [h] = arrayCard [h]; 
            
            //If not, print a null error.
        } else{                                                                               
            card = 'null';
            console.log('input error');   
            return card;
        }
    }       
    //We remove the separating character of the array together with the index
    for (let w = 0; w < arrayCardNew.length; w++) {                                
            
        if(arrayCardNew[w] == ' ') {          
            arrayCardNew.splice(w, 1);            
        }               
    }      
    // We check the parity of the card.       
    if( arrayCardNew.length % 2 == 0){                                              
        //we fulfill the condition by the Luna method for cards with an even number of symbols.
        for(let i = 0; i < arrayCardNew.length; i++){                                                                                                                                                               // 
                
            if (i % 2 != 0){                                                        
                unpaired_Element = parseInt(arrayCardNew[i]);   
                sum_unpaired  = unpaired_Element + sum_unpaired;
            }
                
            if (i % 2 == 0) {           
                paired_Element = parseInt(arrayCardNew[i]);
                sum_paired = paired_Element * 2;
                    
                if(sum_paired > 9){
                    sum_paired = sum_paired - 9;
                } 
                sum = sum + sum_paired;        
            }
            sum_Card = sum_unpaired  + sum;
        }         
    }   
    // For non-even cards.
    if ( arrayCardNew.length % 2 != 0){                                               
        for(let j = 0; j < arrayCardNew.length; j++){
                  
            if (j % 2 == 0){              
                paired_Element  = parseInt(arrayCardNew[j]);   
                sum_paired  = paired_Element  + sum_paired;
            }
                
            if (j % 2 != 0) {           
                unpaired_Element = parseInt(arrayCardNew[j]);
                sum_unpaired = unpaired_Element * 2;
                    
                if(sum_unpaired > 9){
                    sum_unpaired = sum_unpaired - 9;
                } 
                sum = sum + sum_unpaired;        
            }
            sum_Card = sum_paired + sum;
        }          
    }
    //A check on the multiplicity of 10.
    if(sum_Card % 10 == 0){                                                           
        sum_Card = 'true';
    }
    else{
        sum_Card = 'false';
    }  
       
    card = sum_Card;
    return card;
}
    
+console.log(card());



