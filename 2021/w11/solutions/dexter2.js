N='name'
V='value'
function*g(d,i){i=i||0;for(c of d){yield{[N]:c[N]||c.title,[V]:c[V]||c.data,indent:i};n=c.children||c.subdata;if(n)for(e of g(n,i+50))yield e}}
module.exports=d=>[...g(d)]