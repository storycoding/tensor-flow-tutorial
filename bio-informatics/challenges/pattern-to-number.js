const patternToNumber = (pattern) => {
    const genomeValues = {
        "A" : 0,
        "C" : 1,
        "G" : 2,
        "T" : 3
    }
    const quartary = Object.keys(genomeValues).length;

    let number = 0;

    for (let [i, digit] = [0, pattern.length - 1] ; i < pattern.length ; i++, digit--) {
        const genome = pattern[i];
        const genomeValue = genomeValues[genome];
        const digitValue = quartary ** digit;
        const iterationValue = genomeValue * digitValue;
        number += iterationValue;
    }

    return number;
};

module.exports = patternToNumber;