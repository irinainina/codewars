deadAntCount = function(ants) {
    if(!ants) return 0;
    ants += "ant";
    var ant = ants.match( /ant/g ).length;
    var a = ants.match( /a/g ).length - ant;
    var n = ants.match( /n/g ).length - ant;
    var t = ants.match( /t/g ).length - ant;
    if(a > n && a > t) return a;
    return n > t ? n : t;  
}

// best practice

deadAntCount = function(ants) {
    return ants ? (Math.max((ants.match(/a/g)||[]).length, (ants.match(/n/g)||[]).length, (ants.match(/t/g)||[]).length)) - (ants.match(/ant/g)||[]).length : 0;
}