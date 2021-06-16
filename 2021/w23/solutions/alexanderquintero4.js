const howLong=a=>{const b=[[31536e3,"year"],[86400,"day"],[3600,"hour"],[60,"minute"],[0,"second"]];let c="";for(let d=0;d<b.length;d++){const e=d<b.length-1?Math.floor(a/b[d][0]):a;a=0<e?a%b[d][0]:a,0<e&&(c+=`${0<c.length?0<a?", ":" and ":""}${e} ${b[d][1]}${1<e?"s":""}`)}return c};

module.exports = howLong;
