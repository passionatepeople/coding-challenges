const SECONDS_IN_YEAR = 31536000;
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

const checkYears = (s) => {
  const years = Math.floor(s / SECONDS_IN_YEAR);
  return {
    years,
    remainder: s - years * SECONDS_IN_YEAR,
  };
};

const checkDays = (s) => {
  const days = Math.floor(s / SECONDS_IN_DAY);
  return {
    days,
    remainder2: s - days * SECONDS_IN_DAY,
  };
};

const checkHours = (s) => {
  const hours = Math.floor(s / SECONDS_IN_HOUR);
  return {
    hours,
    remainder3: s - hours * SECONDS_IN_HOUR,
  };
};

const checkMinutes = (s) => {
  const minutes = Math.floor(s / SECONDS_IN_MINUTE);
  return {
    minutes,
    seconds: s - minutes * SECONDS_IN_MINUTE,
  };
};

const howLong = (s) => {
  let { years, remainder } = checkYears(s);
  let { days, remainder2 } = checkDays(remainder);
  let { hours, remainder3 } = checkHours(remainder2);
  let { minutes, seconds } = checkMinutes(remainder3);
  let ret = [];
  if (years > 0) {
    ret.push(years === 1 ? years + " year" : years + " years");
  }
  if (days > 0) {
    ret.push(days === 1 ? days + " day" : days + " days");
  }
  if (hours > 0) {
    ret.push(hours === 1 ? hours + " hour" : hours + " hours");
  }
  if (minutes > 0) {
    ret.push(minutes === 1 ? minutes + " minute" : minutes + " minutes");
  }
  if (seconds > 0) {
    ret.push(seconds === 1 ? seconds + " second" : seconds + " seconds");
  }
  if (ret.length === 1) {
    return ret[0];
  }
  return ret.slice(0, -1).join(", ") + " and " + ret.slice(-1);
};

module.exports = howLong;
