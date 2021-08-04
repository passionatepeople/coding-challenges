var isArray = Array.isArray;
module.exports = (haystack, needle) => {
  for (var i = 0, il = haystack.length; i < il; ++i) {
    var l1 = haystack[i];
    if (isArray(l1))
      for (var j = 0, jl = l1.length; j < jl; ++j) {
        var l2 = l1[j];
        if (isArray(l2))
          for (var k = 0, kl = l2.length; k < kl; ++k) {
            var l3 = l2[k];
            if (isArray(l3))
              for (var l = 0, ll = l3.length; l < ll; ++l) {
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
