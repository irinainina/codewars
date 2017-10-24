var capitals = function (word) {
    var arr = word.split("");
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].charCodeAt() < 95)
            result.push(i);
    }
    return result;
};