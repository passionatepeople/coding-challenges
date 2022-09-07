const replaceAll = String.prototype.replaceAll.call.bind(String.prototype.replaceAll), magic = /[^#]#/g;
module.exports = (text) => {
    let length;
    do {
        length = text.length;
        text = replaceAll(text, magic, '');
    } while (length !== text.length);
    return text;
}