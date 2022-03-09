const goAround=n=>{let t=0;const s=[];for(;t<n.length;){const o=s[t-1]||n;s[t]=o.substring(1,o.length)+o.substring(0,1),t++}return s};

module.exports = goAround;
