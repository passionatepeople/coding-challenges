module.exports=(s,p='')=>[...s].reduce((r,c)=>((f=c.toLowerCase())&&f!=p||!f.match(/[a-z]/))?(p=f)&&r+c:r,'');