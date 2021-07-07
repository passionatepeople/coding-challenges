function p(e){let t=e.length,r=[];if(t&&t<2)return[e];for(let u=0;u<t;u++){let l=e[u];e.indexOf(l)==u&&p(e.slice(0,u)+e.slice(u+1,t)).forEach(e=>{r.push(l+e)})}return r}module.exports=p;
