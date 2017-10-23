function nbYear(p0, percent, aug, p) {
    var population = p0;
    var year = 0;
    while (population < p) {
        population += population * percent / 100 + aug;
        year += 1;
    }
    return year;
}

// best practice

function nbYear(p0, percent, aug, p) {
    for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
    return y;
}