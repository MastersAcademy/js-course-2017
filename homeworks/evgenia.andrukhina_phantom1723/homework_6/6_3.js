let spy,
    obj = {
        a: 1,
        c: {
            d: 2,
            e: 'd',
            f: {
                g: 'deep',
                h: 5
            }
        },
        b: {
            j: 3,
            k: {
                l: 'deep',
                m: 5
            }
        }

    };


function objectLogger(obj) {
    spy = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let b = obj[key];

            if (typeof b === 'object') {
                spy = Object.assign(spy, b);
            }
        }
    }

    if (Object.keys(spy).length !== 0) {
        return objectLogger(spy);
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`"${key}: ${obj[key]}"`);
        }
    }
}

objectLogger(obj);