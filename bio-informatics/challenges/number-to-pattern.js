const { getNucleotideByIndex } = require('./nucleotide-utils');

const numberToPattern = (number, patternLength) => {
    let pattern = [];

    for (let i = 0; i < patternLength; i++) {
        const remainder = number % 4;
        const nucleotide = getNucleotideByIndex(remainder);
        pattern.push(nucleotide);
        number = Math.floor(number / 4);
    }

    return pattern.reverse().join('');
};

module.exports = numberToPattern;