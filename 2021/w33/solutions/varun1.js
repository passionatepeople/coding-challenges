module.exports=(r,t="*")=>{for(arr=[],maxLength=2*r-1,i=0;i<r;i++)len=2*i+1,str=t.repeat(len),str=str.padStart((maxLength-len)/2+len),str=str.padEnd(maxLength),arr.push(str);return arr}