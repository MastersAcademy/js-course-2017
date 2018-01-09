function objectLogger () {
    let result = [];
    return function check(obj) {
        let i = 0;
        for(let key in obj){
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    result[i] = obj[key];
                    i++;
                    check(obj[key]);
                }
            }
        }
        return result;
    };
}


function consoleLog(arr) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    }
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

let data2 = {
    a : 1,
    b : {
        c : 2
    },
    c : {
        d : 3
    }
};

let result1 = objectLogger();
console.log(result1(data));

let result2 = objectLogger();
console.log(result2(data1));

let result3 = objectLogger();
consoleLog(result3(data2));

