module.exports=r=>(s=(a,b)=>!a?1:!b?-1:0,t=[...r],t.sort(s).map((d,i)=>d==t[i-1]&&(t[i-1]=2*d,t[i]=0)),t.sort(s))