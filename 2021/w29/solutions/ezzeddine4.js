const chopMeUp=(t,e,n)=>{if(e||(e=2),n||(n="_"),t.length===e||1===e||0===e)return[t];const r=Math.ceil(t.length/e),h=[];for(let l=0,c=0;l<r;l++)h[l]=t.substr(c,e),c+=e,h[l].length<e&&(h[l]+=n.repeat(e-h[l].length));return h};
module.exports = chopMeUp;
