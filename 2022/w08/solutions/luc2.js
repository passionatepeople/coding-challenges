const max = Math.max;
const min = Math.min;
const io = Array.prototype.indexOf;
module.exports=(c,n)=>{
  if (n==1) {
    let a=c[0];for(i=1;i<c.length;++i)a+=c[i];
    return a;
  }
  i=0;
  l=c.length;
  a=Array(n).fill(0);
  for(;i<l;++i) {
    a[io.call(a,min.apply(null, a))]+=c[i];
  }
  return max.apply(null, a);
};