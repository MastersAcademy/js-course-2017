"use strict";

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

let data2 = {
    a : {
        b : 2
    },
    c : {
        d : 2
    }
};

function objectLogger(obj) {
    if (objectLogger.maxDepth === undefined) {
        objectLogger.maxDepth = 0;
        objectLogger.currentDepth = 0;
        objectLogger.deepestObj = Object.assign({}, obj);
    }

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if ( isObject(obj[key]) ) {
                objectLogger.currentDepth++;

                if (objectLogger.currentDepth > objectLogger.maxDepth) {
                    objectLogger.maxDepth = objectLogger.currentDepth;
                    objectLogger.deepestObj = Object.assign({}, obj[key]);
                } else if (objectLogger.currentDepth === objectLogger.maxDepth) {
                    Object.assign(objectLogger.deepestObj, obj[key]);
                }

                objectLogger(obj[key]);
            }
        }
    }

    if (objectLogger.currentDepth === 0) {
        objectLogger.maxDepth = undefined;

        return objectLogger.deepestObj;
    } else {
        objectLogger.currentDepth--;
    }
}

function isObject(o) {
    return o instanceof Object && o.constructor === Object;
}

console.log(objectLogger(data));
console.log(objectLogger(data1));
console.log(objectLogger(data2));
