function findUniq(arr) {
    var foo, bar, baz, bg;
    foo = arr[0];
    bar = arr[1];
    baz = arr[2];

    if(foo == bar || foo == baz) {
        bg = foo;
    }
    else {
        bg = bar;
    }
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] !== bg) {
            return arr[i];
        }
    }
}