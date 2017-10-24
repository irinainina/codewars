function pickPeaks(arr) {
    var result = {pos: [], peaks: []};
    var pos = - 1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            pos = i;
        } 
        else if (arr[i] < arr[i - 1] && pos != - 1) {
            result.pos.push(pos);
            result.peaks.push(arr[pos]);
            pos = - 1;
        }
    }
    return result;
}