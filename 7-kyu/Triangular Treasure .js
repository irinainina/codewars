function triangular(n) {
    return (n > 0) ? n + triangular(n - 1)  : 0;
}