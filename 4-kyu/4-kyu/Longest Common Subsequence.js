function LCS(x, y) {
    var arr = [];
    for (var i = 0; i < y.length; i++) {
        for (var j = 0; j < x.length; j++) {
            if (y[i] == x[j]) {
                arr.push(y[i]);
                x = x.slice(j+1);
                y = y.slice(i+1);
                j = -1;
                i = -1;
                break;
            }
        }
    }
    return arr.join('');
}