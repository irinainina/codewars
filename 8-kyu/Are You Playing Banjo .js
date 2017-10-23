function areYouPlayingBanjo(name) {
    if (name.search(/r/i) === 0) {
        return name + ' plays banjo';
    } else {
        return name + ' does not play banjo';
    }
}