const txtEditor = (text) => {
    let len = text.length;
    if (len <= 2) return text;
    let out = '', backspaces = 0, i = len - 1;

    for (i; i >= 0; i--) {
        let curr = text[i]
        if (curr == '#') {
            backspaces += 1;
            continue;
        }
        if (backspaces) {
            backspaces -= 1
            continue;
        }
        out = curr + out
    }
    return out;
};

module.exports = txtEditor;