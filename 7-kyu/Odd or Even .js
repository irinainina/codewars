function oddOrEven(array) {
    if(!array.length) return "even"
    return array.reduce((a, b) => a + b) & 1 ? "odd" : "even";
}