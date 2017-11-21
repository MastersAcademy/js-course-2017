function card(){
    let card = '4561261212345467';
   
    let  sum_unpaired = 0, paired_Elemen = 0, unpaired_Elemen = 0, sum_paired = 0, sum = 0, sum_Card;
    arrayCard = card.match(/[\S\s]{1,1}/g);
    let arrayCardNew = [];
    
    
    for(let h = 0; h < card.length; h++ ){                                        // Проверка на наличие символов.
                                                                                                                                
        if((arrayCard[h] >= 0 && arrayCard[h] <= 9 ) || arrayCard[h] == ' '){     // Если символ разделяющий, перезаписываем в новый массив    
                                                                                  //числа и символы.
            arrayCardNew [h] = arrayCard [h]; 
                             
        }else{                                                                    // Если нет, выводим null, ошибка.            
            card = 'null';
            console.log('ошибка входных данных');   
            return card;

        }
    }
       
   
   
   

    for (let w = 0; w < arrayCardNew.length; w++) {                                //Удаляем разделяющий символ массива вместе с индексом.
        
        if(arrayCardNew[w] == ' ') {
            
            arrayCardNew.splice(w, 1);            
        }        
        
    }
        

           
    if( arrayCardNew.length % 2 == 0){                                              //  Проверяем на чётность карту.

        for(let i = 0; i < arrayCardNew.length; i++){                               //  Если карта с чётным кол-вом символом                                                                                                                                // 
            
            if (i % 2 != 0){                                                        // выполняем условие по методу Луна. 
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
   
    
    if ( arrayCardNew.length % 2 != 0){                                               // Для не чётных карт.
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
   
    if(sum_Card % 10 == 0){                                                            //Проверка на кратность 10-ти.
        sum_Card = 'true';
    }
 else{
    sum_Card = 'false';
 }  
   
    card = sum_Card;
    return card;
}


console.log(card());




