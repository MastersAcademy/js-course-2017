const characterComparison = (arr) => {
    return arr
        .map(elem => elem.toLowerCase())
        .map(elem => (elem.split("a").length - 1) == (elem.split("m").length - 1))
        .map(elem => Number(elem))
}

let taskArray =  ["first", "second", "third", "fourth", "masters academy"];

console.log( characterComparison( taskArray ) );
