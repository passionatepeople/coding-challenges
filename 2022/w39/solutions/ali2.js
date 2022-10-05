const hashedAllTheWay=c=>c.split('').reduce((h,c)=>h+=c.charCodeAt(0).toString(16),'').replace(/\D/g,'').split('').reduce((b,f)=>+b+(+f),0)
module.exports = hashedAllTheWay;