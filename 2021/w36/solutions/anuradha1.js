const { isInteger } = Number;
module.exports=a=>Math.min.apply(null,a.filter(isInteger))