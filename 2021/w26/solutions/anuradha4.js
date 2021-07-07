let p=e=>{let t=e.length,r=[];return t<2?[e]:([...e].forEach((l,u)=>{e.indexOf(l)==u&&p(e.slice(0,u)+e.slice(u+1,t)).forEach(e=>r.push(l+e))}),r)};module.exports=p
