function dirReduc(arr){
    for (var i = 0; i < arr.length; i++) {
        if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
           (arr[i] === "SOUTH" && arr[i+1] === "NORTH") ||
           (arr[i] === "EAST" && arr[i+1] === "WEST") ||
           (arr[i] === "WEST" && arr[i+1] === "EAST")) {
            arr.splice(i,2);
            i -= 2;
        }
    }
    return arr;
}

// best practice

unction dirReduc(plan) {
    var opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
            dirs.pop();
        else
            dirs.push(dir);
        return dirs;
    }, []);
}