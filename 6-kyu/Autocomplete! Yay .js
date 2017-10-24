function autocomplete(input, dictionary){
    var re = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
    return dictionary.filter(function(e){ return re.test(e); }).slice(0, 5);
}