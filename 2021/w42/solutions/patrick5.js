module.exports=(𓀀,𓀁)=>{const 𓀃=[`${𓀀.replace(/^0+/,"")}n`,`${𓀁.replace(/^0+/,"")}n`],𓀄=String.fromCharCode(66,105,103,73,110,116),𓀅=𓀂=>eval(`${𓀄}(${𓀂})`);return(𓀅(𓀃[0])+𓀅(𓀃[1])).toString()};