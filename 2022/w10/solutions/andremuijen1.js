const sort = Array.prototype.sort;
const ageMedian=(e,t)=>{let n=new Date(t).getTime(),a=e.length,g=[],l=-1,r=a/2;for(;++l<a;)g[l]=~~((n-new Date(e[l]).getTime())/315576e5);return g=sort.call(g,(e,t)=>e-t),r%1?g[r-.5]:(g[r-1]+g[r])/2};
module.exports = ageMedian;
