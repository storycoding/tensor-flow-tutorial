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
exercise solution

const data = require('./test-data/find-starting-indexes-of-pattern.json');
const { args } = data;
const [ dnaString, pattern ] = args;

const result = findStartingIndexesOfPattern(dnaString, pattern);
console.log(result.toString().replace(/,/g, " "));
*/