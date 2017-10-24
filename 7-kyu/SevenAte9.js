function sevenAte9(str){
    str = str.split("");
    for(var i = 0; i < str.length; i++) {
        if(str[i] == 9 && str[i-1] == 7 && str[i+1] == 7) {
            str.splice(i, 1)
        }
    }
    return str.join("");
}