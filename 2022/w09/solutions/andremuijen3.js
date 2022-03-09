const goAround=c=>c.split("").reduce((e,s,i)=>(e[i]=c.slice(i+1)+c.slice(0,i+1),e),[]);

module.exports = goAround;
