module.exports=(a,b)=>[...a].reduce(([i,f],c)=>f.includes(c)?[i.replace(c,""),f.replace(c,"")]:[i,f],[a,b]).filter(Boolean)