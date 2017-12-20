let freezeFactory = (multiple) => {
    let counter = 0;
    return () => {if (++counter % multiple == 0) console.log(multiple)}
}

let frozen = freezeFactory(6);

for (let i = 0; i < 10; i++) {
    frozen();
}
