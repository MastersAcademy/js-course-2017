function freezeFactory(showCount) {
    var currentCount = 0;

    return function() {

        if (showCount == currentCount ){
            console.log( currentCount );
            currentCount = 0;
        }

        return currentCount++;
    };
}

let frozen = freezeFactory(72);

for (var i = 0; i <= 81; i++) {
    frozen();
}
