function divisors(integer) {
    var arr = [];
    for (i = 2; i <= integer/2; i++) {
        if(integer%i == 0) {
            arr.push(i);
        }
    }
    return (arr.length > 0? arr : integer + " is prime");
};

// best practice

function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};