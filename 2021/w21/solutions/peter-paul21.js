module.exports=r=n=>n<2?[]:eval("for(f=1;n%++f&&f<n;);[f,...r(n/f)]")