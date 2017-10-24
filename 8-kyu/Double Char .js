function doubleChar(str) {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i];
    }
    return arr.join('');
}