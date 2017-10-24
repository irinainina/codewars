function isPangram(string){
    string = string.toLowerCase();
    var obj = {};
    for(i = 0; i < string.length; i++) {
        var str = string[i].charCodeAt();
        if(str > 96 && str < 123) {
            obj[str] = true;
        }
    }
    return Object.keys(obj).length == 26;
}