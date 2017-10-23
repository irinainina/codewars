function positiveSum(arr) {
    var m = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            m += arr[i];
        }
    }
    return m;
}