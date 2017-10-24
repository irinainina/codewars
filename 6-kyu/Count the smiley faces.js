function countSmileys(arr) {
    return arr.join(",").match(/[:;]+[-~]?[D)]/g) ? 
        arr.join(",").match(/[:;]+[-~]?[D)]/g).length : 0;
}