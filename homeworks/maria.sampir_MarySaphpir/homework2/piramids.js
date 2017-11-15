"use strict";

function createHalfPyramid (height) {
    height ? height : height = 4;
    for (var i = 1; i <= height; i++) {
        var row = '';

        for (var j = 1; j <= (height - i); j++) {
            row += ' ';
        }

        for (var k = 1; k <= i; k++) {
            row += '*';
        }

        for (var j = 1; j <= height; j++) {
            row += ' ';
        }

        for (var k = 1; k <= i; k++) {
            row += '*';
        }

        console.log(row );
    }
}

createHalfPyramid();
createHalfPyramid(5);
