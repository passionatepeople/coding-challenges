const plainOctets = Array.from({ length: 256 }, (_, o) => o.toString())

const separatedOctets = plainOctets.map((o) => o + '.')

const int2IP = (int32) =>
  separatedOctets[(int32 >> 24) & 255] +
  separatedOctets[(int32 >> 16) & 255] +
  separatedOctets[(int32 >> 8) & 255] +
  plainOctets[int32 & 255]

module.exports = int2IP