module.exports=e=(a,m=(o,l,r)=>({m:l*r,d:l/r,a:l+r,s:l-r})[o])=>a.value??m(a.operator[0],e(a.left),e(a.right))