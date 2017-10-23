function hasValidHKPhoneNumber(str) {
    return /[^'"]\d{4}\s+\d{4}/.test(str);
}