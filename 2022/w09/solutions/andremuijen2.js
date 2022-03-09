const goAround=s=>s.split("").map((c,i)=>s.slice(i+1)+s.slice(0,i+1));

module.exports = goAround;
