module.exports=(a,t,f=(l,x)=>l.some(a=>a)?f(l.map(l=>l-1||a[t++]),x+1):x)=>f(a.slice(0,t),0)