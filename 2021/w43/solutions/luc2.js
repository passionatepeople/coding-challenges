module.exports=(input)=>input.length>=26&&"abcdefghijklmnopqrstuvwxyz".split('').some(a=>input.toLowerCase().indexOf(a)==-1)==false
