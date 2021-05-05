// THERE IS ONLY SPEC.JSON !
// 
// ,    ,    /\   /\
// /( /\ )\  _\ \_/ /_
// |\_||_/| < \_   _/ >
// \______/  \|0   0|/
//   _\/_   _(_  ^  _)_
//  ( () ) /`\|V"""V|/`\
//    {}   \  \_____/  /
//    ()   /\   )=(   /\
//    {}  /  \_/\=/\_/  \
//
// (credit: https://www.asciiart.eu/)
//
const isValid = code => {
  let count = 0;

  for(let i = 0; i < code.length; i++) {
    const current = code.charCodeAt(i);
    if (current > 39 && current < 42) {
      count++;
    }
  }

  return count % 2 == 0;
};

module.exports = isValid;