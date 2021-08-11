module.exports=(s,l,d={})=>s.filter(i=>(d[i]=d[i]+1||1)&&d[i]<=l);
