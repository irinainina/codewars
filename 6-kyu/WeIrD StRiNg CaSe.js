function toWeirdCase(string) {
    var string = string.split('');
    for (i = 0; i < string.length; i += 1) {
        if (string[i] != ' ') {
            string[i] = string[i].toUpperCase();
            i += 1;
        }
    }
    return string.join('');
}

// best practice

function toWeirdCase(string){
    return string.split(' ').map(function(word){
        return word.split('').map(function(letter, index){
            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('');
    }).join(' ');
}