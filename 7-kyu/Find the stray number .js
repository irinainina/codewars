function stray(numbers) {
    var foo, bar, baz, bg;
    foo = numbers[0];
    bar = numbers[1];
    baz = numbers[2];
    if (foo == bar && foo == baz) {
        bg = foo;
    } 
    else {
        bg = bar;
    }
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] !== bg)
            return numbers[i]
    }
}