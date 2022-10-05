const table=Array.from({length:123},(_, i)=>{let s=(i).toString(16);return(s[0]|0)+(s[1]|0)});
module.exports=(code)=>{
    let sum = 0;
    const {length} = code;
    for (let i = 0; i < length; i++) {
        sum += table[String.prototype.charCodeAt.call(code, i)];
    }
    return sum;
}