module.exports=a=>{const b=a.indexOf(Math.min.apply(null, a));return[...a.slice(0,b),...a.slice(b+1,a.length)]}