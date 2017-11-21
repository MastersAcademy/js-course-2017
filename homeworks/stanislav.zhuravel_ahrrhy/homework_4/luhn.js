function checkLuhn(numbers) {

    if (/[a-zA-Z]/.test(numbers)) return null;

    let sum = 0,
        digit = 0,
        parity = false;
    numbers = numbers.replace(/\D/g, '');

    for (let i = numbers.length-1; i >=0; i--) {
        digit = parseInt(numbers.charAt(i), 10);
        if (parity) {
            const digitDouble = digit *= 2;
            if (digitDouble > 9) {
                digit -= 9;
            }
            sum += digit;
            parity = !parity;
        }
    }
    return (sum % 10) === 0;
}
console.log(checkLuhn('23424234324242234'));
