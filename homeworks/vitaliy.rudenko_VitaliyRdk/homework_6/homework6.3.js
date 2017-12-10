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

let rezult = {}

function getNestedField(obj){
    for(let key in obj){
        if (obj[key] == '[object Object]'){
            rezult = obj[key];
            getNestedField(obj[key]);
        }
    }
    return rezult;
}

console.log(getNestedField(data1));
