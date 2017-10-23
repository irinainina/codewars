function squareDigits(num){
    var arr = [];
    num = num.toString();
    for (i = 0; i < num.length; i++) {
        var a = num[i] * num[i];
        arr.push(a);
    }
    return +arr.join("");
}