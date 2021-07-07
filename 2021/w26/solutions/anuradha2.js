function p(e){const t=e.length,r=[];if(t<2)return[e];for(let u=0;u<t;u++){const n=e[u];if(e.indexOf(n)===u){p(e.slice(0,u)+e.slice(u+1,t)).reduce((e,t)=>(e.push(n+t),e),r)}}return r}module.exports=p

