module.exports=a=>([,...c]=[...a].sort((a,b)=>a-b),c.pop(),eval(c.join`+`)|0)