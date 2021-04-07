module.exports = (int32) => `${int32 >> 24 & 0xFF}.${int32 >> 16 & 0xFF}.${int32 >> 8 & 0xFF}.${int32 & 0xFF}`
