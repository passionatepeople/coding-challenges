// lol :D
module.exports=e=(f,o=[],i=0)=>{for(l="length",c="slice";i<f[l];i++)if(f.indexOf(f[i])==i)for(m of(r=f[c](0,i)+f[c](i+1,f[l]),e(r)))o.push(f[i]+m);return f[1]?o:[f]}