h=n=>(n<16?0:"")+(n<0?0:n>255?255:n).toString(16).toUpperCase()
module.exports=(r,g,b)=>'#'+h(r)+h(g)+h(b)