const iStandOut = (numbers) => {
    const nums = numbers.filter((number) => number % 2 === 0);
    return nums.length == 1 ? nums[0] : numbers.find((number) => number % 2 !== 0);
};

module.exports = iStandOut;