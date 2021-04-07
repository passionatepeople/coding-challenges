
const shifters = new Uint8Array([24,16,8,0])
module.exports = i => shifters.map(s => i >> s).join('.')
