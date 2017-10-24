function stringy(size) {
    var str = '';
    while (size > 1) {
        str += '10';
        size -= 2;
    }
    return size == 1 ? str += '1' : str;
}