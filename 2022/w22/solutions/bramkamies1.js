const k=[0,1,4,9,16,25,36,49,64,81];module.exports=n=>{let a=0;let p=1;while(n){let d=n%10;n=(n-d)/ 10;a+=k[d]*p;p*=d>3?100:10;}return a;};