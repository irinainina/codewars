String.prototype.camelCase = function () {
    return this.replace(/^\w|\s\w/g, function(s) {
        return s.toUpperCase(); 
    }).replace(/\s/g, "");
}