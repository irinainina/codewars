function formatWords(words) {
    if(words) {
        words = words.filter(element => element !== "");
        return words.join(', ').replace(/,(?![^,]*,)/m, ' and');
    } else return ""
}