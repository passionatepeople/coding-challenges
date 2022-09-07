module.exports = txt => {
    let out = '';
    let head = 0;
    for (let hash = txt.indexOf('#', head); hash !== -1; hash = txt.indexOf('#', head)) {
        let hashes = 1;
        while (txt[hash + hashes] === '#') {
            hashes++;
        }
        out += txt.slice(head, hash - hashes);
        head = hash + hashes;
    }
    return out + txt.slice(head);
}