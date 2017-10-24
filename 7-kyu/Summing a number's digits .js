function sumDigits(number) {
    if (number < 0) {
        number *= - 1;
    }
    var arr = number.toString().split('');
    return arr.reduce((a, b) => +a + +b, 0);
}