function printerError(s) {
    s = s + "z";
    return (s.match( /[n-z]/ig ).length - 1) + "/" + (s.match( /[a-z]/ig ).length - 1);
}