function likes(names) {
    var n = names.length;
    switch (n) {
        case 0:
            str = "no one likes this";
            break;
        case 1:
            str = names[0] + " likes this";
            break;
        case 2:
            str = names[0] + " and " + names[1] + " like this";
            break;
        case 3:
            str = names[0] + ", " + names[1] + " and " + names[2] + " like this";
            break;
        default:
            str = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others" + " like this";
            break;
             }
    return str;
}