var moveZeros = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            i -= 1;
            sum += 1;
        }
    }

    while (sum > 0) {
        arr.push(0);
        sum -=1;
    }
    return arr;
}