//This function should return n!
function factorial (n) {
    if (n > 0) {
        return n * factorial(n - 1)
    } 
    else if (n == 0) {
        return 1
    }