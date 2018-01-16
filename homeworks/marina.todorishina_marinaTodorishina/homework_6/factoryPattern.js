function freezeFactory(num, count) {

    return {

        num: num,

        count: count,

        returnAliquotCountOfFunctions() {
            return num;
        }

    }
}

function run(func) {

    for (let i = 1; i <= func.count; i++) {

        if (i % func.num == 0) {
            console.log(func.returnAliquotCountOfFunctions());
        }

    }
}

let frozen = freezeFactory(4, 15);
run(frozen);
