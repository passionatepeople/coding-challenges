const a = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven'
,'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
const b=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

const getSaiyanLevel = (input) => {
  if(input>9000) return "it's over nine thousand!"
  if(input===0) return 'zero'

  let t = (input / 1000)<<0
  let tnum = t*1000
  let h = ((input - tnum)/100)<<0
  let hnum = h*100
  let te = ((input - tnum - hnum)/10)<<0
  let o = ((input - tnum - hnum-te*10)/1)<<0
  let hasTeen = te>=1
  let hasTOrH=(t||h)
  let hasTeOrO = hasTeen || a[o]
  let bte = b[te]
  let ao = a[o]
  return `${t ? `${a[t]} thousand`:''}${(t&&h)?' ':''}${h ? `${a[h]} hundred`:''}${hasTOrH ? hasTeOrO?' ':'':''}${hasTOrH&&hasTeOrO ? `and `:''}${bte?`${bte}`:''}${bte&&o?' ':''}${te==1?a[te*10+o]: ao?`${ao}`:''}`
};

module.exports = getSaiyanLevel;
