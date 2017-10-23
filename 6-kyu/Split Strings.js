function solution(str) {
    var arr = [];
    var i = 0;
    if (str.length % 2) {
        str = str + '_';
    }
    while (str.length) {
        arr.push(str[i] + str[i + 1]);
        str = str.slice(2);
    }
    return arr;
}