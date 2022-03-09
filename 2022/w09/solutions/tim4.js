const goAround = (str) => {
    let length = str.length,
      result = [],
      index = 1;

      if(length === 4) {
        return [str[1]+str[2]+str[3]+str[0]
        ,str[2]+str[3]+str[0]+str[1]
        ,str[3]+str[0]+str[1]+str[2]
        ,str];
      }

      if(length === 5) {
        return [str[1]+str[2]+str[3]+str[4]+str[0]
        ,str[2]+str[3]+str[4]+str[0]+str[1]
        ,str[3]+str[4]+str[0]+str[1]+str[2]
        ,str[4]+str[0]+str[1]+str[2]+str[3]
        ,str];
      }

      if(length === 6) {
        return [str[1]+str[2]+str[3]+str[4]+str[5]+str[0]
        ,str[2]+str[3]+str[4]+str[5]+str[0]+str[1]
        ,str[3]+str[4]+str[5]+str[0]+str[1]+str[2]
        ,str[4]+str[5]+str[0]+str[1]+str[2]+str[3]
        ,str[5]+str[0]+str[1]+str[2]+str[3]+str[4]
        ,str];
      }

    for (; index < length; ++index) {
      result.push(str.slice(index) + str.slice(0, index));
    }
    result.push(str);

    return result;
  };

  module.exports = goAround;
