module.exports=(a,t,x=0,l=a.slice(0,t),y=Math,m=y.min(...l))=>{while(t<a.length)p=m,x+=p,l=l.map(l=>l-p||a[t++]).filter(l=>l),m=y.min(...l);return x+y.max(...l)}