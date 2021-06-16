const years = (n) => (n == 1 ? "1 year" : n + " years");
const days = [, "1 day"];
const hours = [, "1 hour"];
const minutes = [, "1 minute"];
const seconds = [, "1 second"];
for (let i = 2; i < 365; i++) days.push(i + " days");
for (let i = 2; i < 60; i++) {
  hours.push(i + " hours");
  minutes.push(i + " minutes");
  seconds.push(i + " seconds");
}

const howLong = (duration) => {
  const parts = [];

  let part;
  duration -= part = duration % 60;
  if (part) parts.push(seconds[part]);
  duration -= part = duration % 3600;
  if (part) parts.push(minutes[part / 60]);
  duration -= part = duration % 86400;
  if (part) parts.push(hours[part / 3600]);
  duration -= part = duration % 31536000;
  if (part) parts.push(days[part / 86400]);
  if (duration) parts.push(years(duration / 31536000));

  let result = parts.pop();
  while (parts.length) {
    result += (parts.length == 1 ? " and " : ", ") + parts.pop();
  }

  return result;
};

module.exports = howLong;