const chopMeUp=(e,t=2,r="_")=>{var l=Math.ceil(e.length/t);let h=new Array(l);for(let r=0,n=0;r<l;++r,n+=t)h[r]=e.substr(n,t);var n=h[h.length-1];r=r.repeat(t-n.length);return n.length<t&&(h[h.length-1]=n+r),h};module.exports=chopMeUp;