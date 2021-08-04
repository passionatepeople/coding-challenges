const findMeDeep=(e,r)=>{let n=!1;const t=(e,s)=>{e.slice(0).reduce((e,r,c,i)=>Array.isArray(r)?t(r,s):void(r===s&&(n=!0,i.splice(1))),[])};return t(e,r),n};

module.exports = findMeDeep;
