let c=String.prototype.charCodeAt,f=String.fromCharCode;module.exports=(a)=>{let i=0;while(i<a.length){let t=c.call(a[i],0)+1;if(t!==c.call(a[i+1],0)){return f(t)}i++}};