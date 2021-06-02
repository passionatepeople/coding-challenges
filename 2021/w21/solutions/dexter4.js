module.exports=(n,f=[],p=2)=>{for(;n>1;p++){for(;!(n%p);n=n/p){f.push(p)}}return f}
