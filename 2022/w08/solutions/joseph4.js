module.exports=((a,t)=>Math.max(...a.reduce((p,n)=>(p[p.indexOf(Math.min(...p))]+=n,p),Array(t).fill(0))));