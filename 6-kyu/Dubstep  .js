function songDecoder(song){
    return song.replace( /WUB/g, " " ).replace(/ +/g, " ").replace(/^ +/, "").replace(/ $/, ""); 
}