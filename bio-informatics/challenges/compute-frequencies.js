const patternToNumber = require('./pattern-to-number');

const computeFrequencies = (DNAString, kMerLength) => {
    const frequencyArray = new Array(4 ** kMerLength).fill(0);

    for (let start = 0; start < DNAString.length; start++) {
        const end = start + kMerLength;
        if(!DNAString[end -  1]) { break }

        const currentSequence = DNAString.slice(start, end);
        
        const index = patternToNumber(currentSequence);
        frequencyArray[index]++;
    }
    
    return frequencyArray;
}

module.exports = computeFrequencies;