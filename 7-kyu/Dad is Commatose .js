function dadFilter(str){
    return str.replace(/,+/g, ',').replace(/(,+\s?)+$/, '');
}