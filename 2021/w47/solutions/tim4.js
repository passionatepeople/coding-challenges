const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const Hey_I_just_met_you_and_this_is_crazy_but_here_is_my_number_so_ping_me_maybe = ip => regex.test(ip)

module.exports = Hey_I_just_met_you_and_this_is_crazy_but_here_is_my_number_so_ping_me_maybe;
