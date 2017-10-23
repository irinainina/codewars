var countBits = function(n) {
    var res = n.toString(2).match( /1/g );
    return ( res == null) ? 0 : n.toString(2).match( /1/g ).length;
};