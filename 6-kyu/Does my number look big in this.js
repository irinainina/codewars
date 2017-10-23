function narcissistic(value) {
    value = value.toString();
    n = value.length;
    sum = 0;
    for (var i = 0; i < n; i++) {
        sum += Math.pow(value[i], n)
    }
    return (sum == + value ? true : false);
}

// best practice

function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}