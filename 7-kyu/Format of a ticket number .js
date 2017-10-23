function nbrValidTickets(ex){
    var tickets = 0;
    for(var i = 0; i < ex.length; i++) {
        tickets += /^[a-z]\d[a-z]{4}$/i.test(ex[i]);
    }
    return tickets;
}