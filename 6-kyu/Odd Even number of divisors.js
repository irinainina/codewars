function oddity(n){
    return ((Math.sqrt(n) ^ 0) === Math.sqrt(n) ? 'odd' : 'even');
}

// best practice

function oddity(n){
    return Math.sqrt(n)%1 ? "even" : "odd";
}