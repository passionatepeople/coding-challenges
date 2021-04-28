module.exports=(a,i=0,m=0,l=0,v,w)=>{
  for(;i<a.length;i++)(v=a[i],w=v+l,l=w>v?w:v,m=l>m?l:m);
  return m
}