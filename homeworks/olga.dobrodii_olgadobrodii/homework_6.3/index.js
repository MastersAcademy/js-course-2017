let data = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : 4
    }  
}

let data1 = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : {
            f : 5
        }
    }  
}

function objectLogger (obj) {
    let resultObj = {};

    function scan (data){
        for (let key in data){
            if (data[key] instanceof Object) {
                resultObj = {};
                scan(data[key]);
            } else {
                resultObj[key] = data[key];
            }
        }
    }
    scan(obj);
    console.log(resultObj);
} 

objectLogger(data);
objectLogger(data1);