function find_average(array) {
    return array.reduce((sum, current) => {return sum + current}) / array.reduce((sum, current) => {return sum + 1}, 0);
}