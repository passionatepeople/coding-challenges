module.exports=(e,t,d=e.length,r=t.length,a=d,l="",n=0,o,p)=>{for(r>d&&(a=r,[e,t]=[t,e]),t=t.padStart(a,"0"),o=a-1;o>=0;o--)n=(p=+e[o]+ +t[o]+n)/10|0,l=p%10+l;return(n+l).replace(/^0+/,"")}