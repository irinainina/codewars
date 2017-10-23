var isPP = function(n){
    var arr = [];
    for (var i = 2, q = Math.sqrt(n); i <= q; i ++) {
        for (var j = 2; Math.pow(i, j) <= n; j++) {
            if(Math.pow(i, j) == n) {
                arr.push(i, j);
                return arr;
            }
        }
    }
    return null;
}

// best practice

function isPP(n) {
    for (var m = 2; m * m <= n; ++ m)
        for (var k = 2; Math.pow(m, k) <= n; ++ k)
            if (Math.pow(m, k) == n) return [m, k];
    return null;
}