function sortByValueAndIndex(arr) {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var l = arr.length;

    for(i = 0; i < l; i++) {
        arr1.push(i);
        arr1.push(arr[i] * (i + 1));
        arr2.push(arr1);
        arr1 = [];i
    }

    arr2.sort((a, b) => a[1] - b[1]);

    for(j = 0; j < l; j++) {
        var k = arr2[j][0];
        arr3.push(arr[k]); 
    }
    return arr3;
}

// best practice

function sortByValueAndIndex(array) {
    return array
        .map((x, i) => [x, x * i + x])
        .sort((a, b) => a[1] - b[1])
        .map((a) => a[0])
}
