function XO(str) {
    str +="xo"
    return str.match(/x/ig).length == str.match(/o/ig).length;
}