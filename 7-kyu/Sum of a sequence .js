const sequenceSum = (begin, end, step) => {
    if (end >= begin) {
        return begin + sequenceSum(begin + step, end, step);
    }
    return 0;
}