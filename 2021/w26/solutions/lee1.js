e="zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty".split(" ");e[30]="thirty",e[40]="forty",e[50]="fifty",e[60]="sixty",e[70]="seventy",e[80]="eighty",e[90]="ninety",e[100]="hundred";for(var t=21;1e3>t;){var n=Math.floor(t/100),r=Math.floor((t-100*n)/10),o=t-100*n-10*r,i=0;100>t&&(e[t]=e[10*r],0<o&&(e[t]+="-"+e[o])),n&&(e[t]=e[n]+" hundred",(i=t-100*n)&&(e[t]+=" "+e[i])),t++}module.exports=function(t){var n=0>t?"minus ":"",r=Math.abs(t);if(1e3>r)return n+e[r];var o=Math.floor(r/1e3);return t=e[o]+" thousand",(r-=1e3*o)?n+t+" "+e[r]:n+t}