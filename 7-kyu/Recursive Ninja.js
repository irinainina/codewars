function chirp(n) {
    return n > 1 ? 'chirp-' + chirp(n - 1)  : 'chirp'
}