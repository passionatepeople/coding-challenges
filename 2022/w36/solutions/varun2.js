module.exports=([p,q])=>(f=(a,b)=>b?f(b,a%b):a,c=f(p,q),[p/c,q/c])