module.exports=e=>e.every(r=>45==r.reduce((a,b)=>a+b,0))&&e.every((r,i)=>45==r.reduce((a,b,j)=>a+e[j][i],0))