N='name'
V='value'
module.exports=f=(d=[],i=0)=>d.flatMap(e=>([{[N]:e[N]||e.title,[V]:e[V]||e.data,indent:i},...f(e.subdata||e.children,i+50)]))