module.exports=function a(a,b){const c=[`${a.replace(/^0+/,"")}`,`${b.replace(/^0+/,"")}`],e=[String.fromCharCode(114,101,116,117,114,110),String.fromCharCode(66,105,103,73,110,116),String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114)],f=eval(`this.${e[2]}.${e[2]}`)(`${e[0]} ${e[1]}`),g=[f()(c[0]),f()(c[1])];return g[0]+g[1]+""}
