function encode(text, decallage, modulo) { // modulo le diable
    var nb;
    var result = "";
    for (let c of text) {
        nb = c.charCodeAt(0);
        nb += decallage;
        nb %= modulo;
        result += String.fromCharCode(nb);
    }
    return result;
}

function decode(text, decallage, modulo) {
    return encode(text, -decallage, modulo);
}
