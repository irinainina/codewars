var nbrOfLaps = function (x, y) {
    var arr = [];
    for(i = 1; i < x * y; i++) {
        if(x * i % y == 0) {
            arr.push(i, x * i / y);
            break;
        }
    } 
    return arr;
}