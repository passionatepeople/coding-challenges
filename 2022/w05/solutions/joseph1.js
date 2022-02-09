const imSpecial = (str) => {
    // your solution here
   const splitString = str.toLowerCase().split('');

    for (const item of splitString) {
        const charIndex = splitString.indexOf(item);
        const lastCharIndex = splitString.lastIndexOf(item);

        if(charIndex === lastCharIndex){
            return str[charIndex];
        }
    }

    return ''
};

module.exports = imSpecial;