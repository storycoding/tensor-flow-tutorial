const numberToPattern = (number, patternLength) => {
    const genomes = ["A", "C", "G", "T"];
    let pattern = [];

    for (let i = 0; i < patternLength; i++) {
        const remainder = number % 4;
        pattern.push(genomes[remainder]);
        number = Math.floor(number / 4);
    }

    return pattern.reverse().join('');
};

module.exports = numberToPattern;