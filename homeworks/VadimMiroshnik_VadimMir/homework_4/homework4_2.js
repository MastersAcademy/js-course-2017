function card(){
    let card = '4561261212345467';
   
    let x = 0, v = 0, b = 0, c = 0, z = 0, g = 0, t = 0, s = 0, w = 0;
    arr = card.match(/[\S\s]{1,1}/g);
    let arrNew = [];
    
    
    for(let h = 0; h < card.length; h++ ){                                                                         // Проверка на символы
        
        if((arr[h] >= 0 && arr[h] <= 9 ) || arr[h] == ' ' || arr[h] == '.' || arr[h] == ','){
                    
            arrNew [h] = arr [h]; 
                   
                    
        }else{
            card = 'null';
            console.log('ошибка входных данных');
            return card;

        }
    }
       
   
   
   

    for (let w = 0; w < arrNew.length; w++) {                                                                       // Удаление разделительных символов
        
        if(arrNew[w] == ' '|| arrNew[w] == '.' || arrNew[w] == ',') {
            
            arrNew.splice(w, 1);            
        }        
        
    }
        

           
    if( arrNew.length % 2 == 0){                                                                                     // проверка с четным количеством символов

        for(let i = 0; i < arrNew.length; i++){
            
            
            if (i % 2 != 0){              
                v = parseInt(arrNew[i]);   
                g = v + g;
            }
            
            if (i % 2 == 0) {           
                x = parseInt(arrNew[i]);
                b = x * 2;
                
                if(b > 9){
                    b = b - 9;
                } 
                c = c + b;        
            }
            z = g + c;
        }    
      
    }
   
    
    if ( arrNew.length % 2 != 0){                                                                                       //проверка не с четным количеством символов
        for(let j = 0; j < arrNew.length; j++){
            
            
            if (j % 2 == 0){              
                v = parseInt(arrNew[j]);   
                g = v + g;
            }
            
            if (j % 2 != 0) {           
                x = parseInt(arrNew[j]);
                b = x * 2;
                
                if(b > 9){
                    b = b - 9;
                } 
                c = c + b;        
            }
            z = g + c;
        }    
       
    }
   
    if(z % 10 == 0){
        z = 'true';
    }
 else{
     z = 'false';
 }  
   
    card = z;
    return card;
}


console.log(card());




