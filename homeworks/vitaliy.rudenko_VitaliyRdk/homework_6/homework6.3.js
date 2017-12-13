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

let result = {}

function getNestedField(obj){
    for(let key in obj){
        if (obj[key] == '[object Object]'){
            result = obj[key];
            getNestedField(obj[key]);
        }
    }
    return result;
}

console.log(getNestedField(data1));
