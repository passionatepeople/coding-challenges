module.exports=(s,n=2,p='_')=>[...s].reduce((r,_,i)=>s[i*=n]?[...r,s.slice(i,i+n).padEnd(n,p)]:r,[])