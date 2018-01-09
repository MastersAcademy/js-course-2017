let data = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : 4
    }  
};

let data1 = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : {
            f : 5
        }
    }  
};
obj2 = {}; 
function objectLogger (obj) {  
    let j=0;
    for(let key in obj){
        if(obj.hasOwnProperty(key)){ 
           
            if(typeof obj[key] == 'object'){
                obj2 = obj[key];
                objectLogger (obj[key]);  
                j++;
            } 
        }    
    } 
    if (j===0) console.log(obj2);     
} 

objectLogger(data);
objectLogger(data1);