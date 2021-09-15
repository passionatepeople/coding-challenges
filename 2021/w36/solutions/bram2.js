module.exports=a=>a.reduce((r,i)=>Number.isInteger(i)&&i<r?i:r,a.find(x=>Number.isInteger(x)));
