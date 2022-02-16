module.exports=a=>{const b=a[0]===a[0].toUpperCase()?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"abcdefghijklmnopqrstuvwxyz";let c=b.indexOf(a[0]);for(let d=0;d<a.length+1;d++)if(a[d]!==b[c+d])return b[c+d]};
