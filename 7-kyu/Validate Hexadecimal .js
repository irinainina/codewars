function isHex(str) {
    return /^[a-fA-F\d]{3}$|^[a-fA-F\d]{6}$/.test(str);
};