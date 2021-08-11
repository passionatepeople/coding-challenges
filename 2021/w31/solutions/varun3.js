module.exports=(t,e)=>{const n=new Map;return t.filter(t=>{const o=n.get(t)||0;return n.set(t,o+1),o<e})}
