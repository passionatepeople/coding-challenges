module.exports=f=(s,e,c=0)=>s>e?c:f(s+1,e,+!/5/.test(s)+c)