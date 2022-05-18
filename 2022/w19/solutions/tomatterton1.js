module.exports = n => {
    let ans = 0, i=0, nLength = n.length
    
    if (nLength <= 5) return n;

    for (i; i < nLength - 4; i++){
        let num = n.slice(i, i+5)
        if(num > ans){
            ans = num
        }
    }
    return +ans;
}