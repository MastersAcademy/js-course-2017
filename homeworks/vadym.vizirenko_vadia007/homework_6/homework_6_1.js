"use strict";

function FreezeFactory(limit) {
    let calledCount = 0;

    return function () {
        calledCount++;

        if (calledCount % limit === 0) {
            console.log(limit);
        }
    }
}

const limit = 3,
    frozen = new FreezeFactory(limit);

let i = 0;

for (; i < 20; i++) {
    frozen();
}