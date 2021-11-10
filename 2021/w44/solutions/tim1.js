function offWithIt(a, b = [...a]) {
    b.splice(b.indexOf(Math.min.apply(0, b)), 1);
    return b
}

module.exports = offWithIt;
