module.exports=e=>Math.max(...e.reduce((e,a)=>(e[e.indexOf(Math.min(...e))]+=a,e),[0,0,0,0,0]))