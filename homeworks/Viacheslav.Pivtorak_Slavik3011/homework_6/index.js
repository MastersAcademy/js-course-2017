const startTime = new Date();

setInterval(() => {
    const currentTime = new Date();
    let difference = ((currentTime - startTime)/1000).toFixed(3);
    if (difference < 10) difference = '0' + difference;
    if (difference >= 60) {
        let minutes = Math.floor(difference/60);
        let seconds = (difference%60).toFixed(3);
        if (seconds < 10) seconds = '0' + seconds;
        difference = minutes + ':' + seconds;
    }
    
    process.stdout.cursorTo(0);
    process.stdout.clearLine();
    process.stdout.write(`${difference}`);
}, 120);