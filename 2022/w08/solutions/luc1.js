module.exports=(c,n,a=Array(n).fill(0),i=0)=>{for(;i<c.length;i++){a[a.indexOf(Math.min(...a))]+=c[i]}return Math.max(...a)}