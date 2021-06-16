const howLong=a=>{const b=31536e3,c=86400,d=3600,e=60,f=[],g=(b,c)=>{const d="second"===c?a:Math.floor(a/b);f.push(1===d?`${d} ${c}`:`${d} ${c}s`),a-=b*d};for(;0<a;)a>=b?g(b,"year"):a>=c?g(c,"day"):a>=d?g(d,"hour"):a>=e?g(e,"minute"):1<=a&&g(a,"second");return 1<f.length?f.slice(0,-1).join(", ")+" and "+f.slice(-1):f.toString()};

module.exports = howLong;
