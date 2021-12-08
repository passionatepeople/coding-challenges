const MAX = 255;
const DOT = '.';

const Hey_I_just_met_you_and_this_is_crazy_but_here_is_my_number_so_ping_me_maybe = ip => {
  let octet = ''
  for (let i = 0; i < ip.length; i++) {
    if (ip[i] !== DOT) {
      octet += ip[i];
    }

    if (i === ip.length-1 || ip[i+1] === DOT ) {
      if(+octet > MAX) return false;
      octet = '';
    }
  }

  return true;
};

module.exports = Hey_I_just_met_you_and_this_is_crazy_but_here_is_my_number_so_ping_me_maybe;
