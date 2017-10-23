var sumAndMultiply = function (sum, multiply) {
    var arr = [];
    for (var x = 0; x < sum; x++) {
        var y = sum - x;
        if(x * y == multiply) {
            arr.push(x);
            arr.push(y);
            return arr;
        }
    }
    return null;
}