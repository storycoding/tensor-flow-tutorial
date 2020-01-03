const { getNucleotideValue } = require('./nucleotide-utils');

const patternToNumber = (pattern, index = pattern.length - 1, total = 0) => {
    console.log({total})
    if (index < 0) { return total }

    const nucleotide = pattern[index];
    const value = getNucleotideValue(nucleotide);
    const binominalDecimal = pattern.length - ( index + 1);

    total += value * ( 4 ** binominalDecimal );

    return patternToNumber(pattern, index - 1, total);
};

module.exports = patternToNumber;