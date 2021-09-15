module.exports=r=>r.reduce((a,c)=>Number.isInteger(c)?(Number.isInteger(a)?(c<a?c:a):c):a)
