function getValue(value) {
  if (value < 0) {
    return 0;
  } else if (value > 255) {
    return 255;
  }

  return value;
}

const rgb2hex = (red, green, blue) => {
    let r = getValue(red);
    let g = getValue(green);
    let b = getValue(blue);

    // https://www.rapidtables.com/web/color/RGB_Color.html
    // (red*65536) + (green*256) + blue);

    return '#' + ((b | g << 8 | r << 16) | 1 << 24).toString(16).slice(1).toUpperCase();
};

module.exports = rgb2hex;