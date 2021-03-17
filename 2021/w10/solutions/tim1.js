let o

const sf = (a, b) => {
  if(o.get(a) > o.get(b)) {
    return -1
  } else if(o.get(a) < o.get(b)) {
    return 1
  }

  const ac = a.charCodeAt()
  const bc = b.charCodeAt()

  if(ac > bc) {
    return 1
  }else if(ac < bc) {
    return -1
  }
  return 0
}


module.exports = (i) => {
  const l = i.toLowerCase()
  o = new Map()
  for(i=l.length-1; i > -1; i--){
    o.has(l[i]) ? o.set(l[i], o.get(l[i])+1) : o.set(l[i], 1);
  }

  const s = [...o.keys()].sort(sf)
  return s
}
