module.exports=c=>(i=0,r=[0,0,0,0,0,0],c.map(c=>++r[c-1]>2&&(i+=c*(c<2?1e3:100),r[c-1]=0)),i+r[0]*100+r[4]*50)