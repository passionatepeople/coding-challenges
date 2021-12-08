const valNum=a=>{
    if (a.length < 3) return true;
    if (+a[0] * +a[1] > 10) return false;
    if (+a[0] * +a[1] == 10 && +a[2] > 5) return false;
    return true;
}
module.exports=a=>a.split`.`.every(valNum);