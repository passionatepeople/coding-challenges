module.exports=(d,e=[])=>(d.map(d=>e[d]=[...e[d]||[],d]),e.sort((d,e)=>e.length-d.length).flat())