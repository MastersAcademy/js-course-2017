(() => {
    const arrayStrings = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ne a. ',
        'Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.',
        'Integer euismod lacus luctus magna.',
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ];
    const result = [];

    arrayStrings.forEach((strItem) => {
        let m = 0;
        let a = 0;
        let len = strItem.length;

        for (let i = 0; i < len; i++) {
            if (/m/i.test(strItem[i])) m++;
            if (/a/i.test(strItem[i])) a++;
        }

        if (a !== m) result.push(0);
        if (a === m) result.push(1);
        if (a < 1 || m < 1) result.push(1);
    });

    console.log(result);
})();
