const findStartingIndexesOfPattern = (dnaString, pattern) => {
    const startingIndexes = [];

    for (let i = 0; i < dnaString.length; i++) {
        for (let j = 0; j < pattern.length; j++) {

            if (dnaString[i+j] != pattern[j]) {
                break;

            } else {
                if (j === pattern.length-1) {
                    startingIndexes.push(i);
                }
            }
        }
        
    }

    return startingIndexes;
}

module.exports = findStartingIndexesOfPattern;


/*
exercise solution ( vibrio cholerae )

const dnaString = require('./test-data/vibrio-cholerae.json');
const pattern = "CTTGATCAT";

const result = findStartingIndexesOfPattern(dnaString, pattern);
console.log(result.toString().replace(/,/g, " "));
*/