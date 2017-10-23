function pigIt(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(1) + arr[i][0] + 'ay';
    }
    return arr.join(' ')
}