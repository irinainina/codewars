var uniqueInOrder=function(iterable){
    var arr = [];
    if(typeof iterable === 'string') {
        iterable=iterable.split('');
    }

    for(var i = 0; i < iterable.length; i++) {
        if(iterable[i] != iterable[i-1]) {
            arr.push(iterable[i]);
        }
    }
    return arr;
}