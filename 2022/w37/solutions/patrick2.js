module.exports=(d)=>{const c=[...d].sort((a,b)=>b-a);const e=[];let f=1;let g=c[0];for(let i=0;i<c.length;i++){if(c[i]<g){f=i+1}
e.push(f);g=c[i]}
return d.map((num)=>e[c.indexOf(num)])}