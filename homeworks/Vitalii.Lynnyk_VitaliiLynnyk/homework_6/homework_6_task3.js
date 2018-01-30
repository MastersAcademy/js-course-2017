function search() {
    let result  = {};
    return function show(object) {
        for(let key in object){
            if(typeof object[key] === 'object'){
                result = object[key];
                show(object[key]);
            }
        }
        return result;
    };
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
};

let data = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : 4
    }
};

let res = search();
console.log(res(data1));
