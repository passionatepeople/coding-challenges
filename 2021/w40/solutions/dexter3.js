module.exports=(a,z,c=[...Array(122)].fill(0),i,x=String.fromCharCode,r=[])=>{i=a.length
while(i--){c[a.charCodeAt(i)]++
c[z.charCodeAt(i)]--}i=122
while(i--){if(!c[i])continue
if(c[i]==-1)r[1]=x(i)
if(c[i]==1)r[0]=x(i)}return r}