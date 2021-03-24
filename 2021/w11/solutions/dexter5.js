
module.exports=f=(data=[], indent=0) =>
data.flatMap(item => ([
  {
    name: item.name || item.title,
    value: item.value || item.data,
    indent,
  },
  ...f(item.subdata || item.children, indent + 50)
]))
