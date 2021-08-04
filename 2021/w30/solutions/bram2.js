module.exports=d=(h,n)=>h.reduce((f,i)=>(i==n)||Array.isArray(i)&&d(i,n)||f,!1);
