process.stdin.setRawMode(true);

process.stdin.on('readable', () => {
    const key = process.stdin.read();

    if (!key) return;

    const str = String(key);

    switch (str) {
        case 'null':
            break;
        case 'H':
        case 'h':
            console.log('This is help.\nPress\n\tq for interrupt, and\n\th for this help\n\tc for clear terminal');
            break;
        case 'C':
        case 'c':
            console.log('\x1Bc');
            break;
        case 'Q':
        case 'q':
            process.exit(0);
        default:
            console.log(str);
    }

});

console.log('Welcome here, press h for help');