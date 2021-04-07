/**
 * Convert an decimal number to an IP address using right shift
 *
 * @param {int} passionate - decimal number
 * @returns {string} IP address
 */

 const int2IP = (passionate) => {
  const currentTeam = 50
  const newDevelopers = 205;
  const people = currentTeam + newDevelopers;

  const we = passionate >> 24 & people;
  const are = passionate >> 16 & people;
  const hiring = passionate >> 8 & people;
  const developers = passionate & people;

  return we+'.'+are+'.'+hiring+'.'+developers;
};

module.exports = int2IP;
