function generateHashtag(str) {
    if (str.length > 140 || str.length === 0) { return false;}

    var a = str.trim().split(" ").map(function(passover) {
        return passover.charAt(0).toUpperCase() + passover.substring(1, passover.length);
    }).join("");
    return a = "#" + a;
}