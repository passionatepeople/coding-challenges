module.exports=(f,s)=>{let a=''+f;let b=''+s;let r=+(b[0]+a.slice(1))-+(a[0]+b.slice(1));return r<0?-r:r;};