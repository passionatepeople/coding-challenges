const iStandOut = (numbers) => {
  let first = numbers[0] % 2 === 0 ? "EVEN" : "ODD";
  let second = numbers[1] % 2 === 0 ? "EVEN" : "ODD";
  let third = numbers[2] % 2 === 0 ? "EVEN" : "ODD";
  let wantToFind = "";
  if (first === second) {
    wantToFind = first === "EVEN" ? "ODD" : "EVEN";
  } else if (first === third) {
    wantToFind = first === "EVEN" ? "ODD" : "EVEN";
  } else {
    return numbers[0];
  }
  for (let i = 1; i < numbers.length; i++) {
    let res = numbers[i] % 2 === 0 ? "EVEN" : "ODD";
    if (res === wantToFind) {
      return numbers[i];
    }
  }
};

module.exports = iStandOut;