var gimme = function (inputArray) {
    var min = Math.min.apply(null, inputArray);
    var max = Math.max.apply(null, inputArray);
    for( var i = 0; i < inputArray.length; i++) {
        if(inputArray[i] != min && inputArray[i] != max) {
            return i;
        }
    }
};