const hashedAllTheWay = (code) => {
    let hash = 0
    for (let index = 0, codeLenght = code.length; index < codeLenght; index++) {
        let codeTemp = +code.charCodeAt(index).toString(16).replace(/\D/g,'')
        while (codeTemp) {
            hash += codeTemp % 10;
            codeTemp = Math.floor(codeTemp / 10);
        }
    }
    return hash
}

module.exports = hashedAllTheWay;