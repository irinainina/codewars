function addBinary(a,b) {
    var sum = a + b;
    return sum.toString(2);
}

// best practice

function addBinary(a,b){
    return (a+b).toString(2)
}