function f(n, m) {
    return Math.floor(n / m)* m * (m - 1) / 2 +(n % m) * (n % m + 1) / 2 
}