function digital_root(n) {
    var fn = function() {
        return String(n).split('').map(Number).reduce((i,j) => i+j)
    }
    return  fn() > 9 ? digital_root(fn()) : fn()
}