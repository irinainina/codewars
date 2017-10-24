function factorial(n)
{
    if(n < 0 || n > 12)
        throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
    while (n > 0) {
        return n * factorial(n - 1);
    }
    return 1;
}