module.exports=t=>{Array.prototype.m=function(t){for(var r=[],i=0;i<this.length;i++)r.push(t(this[i],i,this));return r},Array.prototype.mr=function(t,r){for(var i=r,s=0;s<this.length;s++)i=void 0!==i?t.call(void 0,i,this[s],s,this):this[s];return i};return t.split("").m((t=>t.charCodeAt(0).toString(16))).join("").split("").mr(((t,r)=>isNaN(parseInt(r))?t:t+parseInt(r)),0)};