module.exports = (haystack, needle) => {
  for (var i = 0, il = haystack.length; i < il; ++i) {
    var l1 = haystack[i],
      l1Length = l1.length;
    if (l1Length)
      for (var j = 0; j < l1Length; ++j) {
        var l2 = l1[j],
          l2Length = l2.length;
        if (l2Length)
          for (var k = 0; k < l2Length; ++k) {
            var l3 = l2[k],
              l3Length = l3.length;
            if (l3Length)
              for (var l = 0; l < l3Length; ++l) {
                if (l3[l] === needle) return true;
              }
            else if (l3 === needle) return true;
          }
        else if (l2 === needle) return true;
      }
    else if (l1 === needle) return true;
  }
  return false;
};
