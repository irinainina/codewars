function sumConsecutives(s) {
    var arr = [];
    var j = 1;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1]) {
            j += 1;
        } 
        else {
            arr.push(s[i] * j);
            j = 1;
        }
    }
    return arr;
}