const OBJECT = {
    name: "Kurt",
    lastname: "Russel",
    bio: {
        place: "Tampa",
        state: "Florida",
        date: "23.01.1987",
        post: {
            a: "aaa",
            b: "bbb"
        }
    },
    else: "1234567890"
}

function writer(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            writer(obj[prop])
        } else {
            console.log( prop + " : " + obj[prop]);
        }
    }
}

writer(OBJECT);