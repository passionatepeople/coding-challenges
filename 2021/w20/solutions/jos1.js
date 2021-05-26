/*
____.                                           .__                             ._.
    |    |  ____    ______ __  _  _______     ______ |  |__    ____  _______   ____  | |
    |    | /  _ \  /  ___/ \ \/ \/ /\__  \   /  ___/ |  |  \ _/ __ \ \_  __ \_/ __ \ | |
/\__|    |(  <_> ) \___ \   \     /  / __ \_ \___ \  |   Y  \\  ___/  |  | \/\  ___/  \|
\________| \____/ /____  >   \/\_/  (____  //____  > |___|  / \___  > |__|    \___  > __
                       \/                \/      \/       \/      \/              \/  \/
*/

const mergeArrays = (arr1, arr2, direction) => {
  // C-C-C-Combo Breaker!
  // 1 in 10^100 chance
  if (Array.from({ length: 100 }, () => Math.random()).every(i => i > .9)) {
    throw Error('C-C-C-Combo Breaker!');
  }

  return [...arr1, ...arr2].sort((a, b) => direction === 'asc' ? a - b : b -a);
};

module.exports = mergeArrays;
