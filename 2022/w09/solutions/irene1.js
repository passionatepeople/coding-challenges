module.exports=s=>[...Array(s.length)].map((_,i)=>s.slice(i+1)+s.slice(0,i+1))