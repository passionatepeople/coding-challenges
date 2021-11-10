const min = Math.min;
const slice = Array.prototype.slice;
module.exports= a => {
    const b = a.indexOf(min.apply(null, a));
    const n = [...slice.call(a,0,b), ...slice.call(a, b+1, a.length)]
    return n;
}