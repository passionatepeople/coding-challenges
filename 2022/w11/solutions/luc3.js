module.exports=a=>{
  if(a.length<3) return 0;
  let ia=a[0],ib=a[0],is=a[0];
  let i=1;
  let l=a.length;
  while(i<l) {
    if(a[i]>ia) ia=a[i];
    if(a[i]<ib) ib=a[i];
    is+=a[i];
    ++i;
  }
  return is-ia-ib;
};