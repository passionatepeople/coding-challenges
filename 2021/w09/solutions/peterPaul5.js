const { TextDecoder } = require('util')

const decoder = new TextDecoder('utf8')
const wasmInstance = new WebAssembly.Instance(new WebAssembly.Module(Buffer.from('AGFzbQEAAAABDAJgAn9/AGADf39/AAMDAgABBQMBAAEHEAIGbWVtb3J5AgADaGV4AAEKcQJaAQF/QQAhAgJAIABBAEgNACAAQf8BIABB/wFIGyECC0EAIAI6AAwgAUE3QTAgAkEPcSIAQQlLGyAAajoAASABQTdBMCACQf8BcSICQZ8BSxsgAkEEdmo6AAALFAAgAEEBEAAgAUEDEAAgAkEFEAALCw4BAEEACwgjAAAAAAAAAA==', 'base64')))
const resultBuffer = new Uint8Array(wasmInstance.exports.memory.buffer, 0, 7);

module.exports = function rgb2Hex(r,g,b) {
   wasmInstance.exports.hex(r, g, b);
   return decoder.decode(resultBuffer);
}