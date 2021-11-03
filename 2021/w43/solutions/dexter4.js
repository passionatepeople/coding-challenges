A=67108863
module.exports=(n,a=A,i=n.length,c)=> {
    while (i--) {
      c = n.charCodeAt(i) - 65
      if (c < 0) continue
      if (c > 32) c -= 32
      a&=A^(1<<c)
    }
    return !a
};