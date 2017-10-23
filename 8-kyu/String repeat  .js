function repeatStr (n, s) {
    var arr = [];
    for(var i = 0; i < n; i++) {
        arr.push(s);
    }
    return arr.join("");
}