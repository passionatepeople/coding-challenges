module.exports=e=>e.reduce((e,p)=>e[e.at(-1)?.[0]=={S:"N",N:"S",W:"E",E:"W"}[p[0]]?'pop':'push'](p)&&e,[])