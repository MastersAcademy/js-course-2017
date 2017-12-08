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

let finalObject = {};

search(OBJECT);

writer(finalObject);

function search(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            finalObject = obj[key];
            search(obj[key])
        }
    }
}

function writer(obj) {
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key} : ${obj[key]}`);
        }
    }
}
