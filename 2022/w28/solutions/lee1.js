function thingsBetweenUs(start, end) {
  start = start.split(".");

  return (
    end.split(".").reduce(function (sum, x, i) {
      return (sum << 8) + +x - +start[i];
    }, 0) - 1
  );
}

module.exports = thingsBetweenUs;