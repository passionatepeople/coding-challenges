module.exports=l=>{t=l.length+1,i=0,r=[0,0,0,0,0,0];while(--t){e=l[t-1];if(++r[e-1]>2)i+=e*(e<2?1e3:100),r[e-1]=0}return i+r[0]*100+r[4]*50}