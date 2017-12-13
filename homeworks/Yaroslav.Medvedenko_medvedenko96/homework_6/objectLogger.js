function objectLogger () {
    let result = {};
    return function check(obj) {
        for(let key in obj){
            if(typeof obj[key] === 'object') {
                result = obj[key];
                check(obj[key]);
            }
        }
        return result;
    };
}


let data = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : {
            f : {
                g : 11
            }
        }
    }
};

let data1 = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : {
            f : 5,
            g : 5,
            h : 5,
            i : 5,
        }
    }
};

let value =  objectLogger();

console.log(value(data),value(data1));

