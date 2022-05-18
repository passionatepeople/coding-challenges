const bigFive = (stringNumber) => {
    var stringLength = stringNumber.length - 4,
        largest = 0;

    for (let i = 0; i < stringLength; i++) {
        var currentSection = stringNumber.substring(i, i + 5),
            currentSectionNumber = Number(currentSection);

        if (currentSectionNumber > largest) {
            largest = currentSectionNumber;
        }
    }

    return largest
};

module.exports = bigFive;