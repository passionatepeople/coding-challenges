module.exports=(i,e=i=>i.type==='Literal'?i.value:g(i),g=(i,k=e(i.left),m=e(i.right),p=i.operator)=>p==='add'?k+m:p==='subtract'?k-m:p==='multiply'?k*m:k/m)=>e(i)