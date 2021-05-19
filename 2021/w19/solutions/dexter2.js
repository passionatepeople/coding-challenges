let m=1
let P=new Set()
let T=(n,i)=>{
if(n%2==0||n<m) return P.has(n)
for(i=m+2;i<=n;i+=2)
prime:{for(p of P){if(i%p==0){break prime}}P.add(m=i)}
return P.has(n)
}
T(51000)
module.exports=n=>T(n)?(n*n-17):~~Math.sqrt(n+15)