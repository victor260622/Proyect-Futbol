
module.exports = function lastFour(lista, indice, options) {
    
    const last = lista - 4;
    const ind = indice + 1;
    
    if(last < ind) {
        return options.fn(this);
    }
    return options.inverse(this);
}