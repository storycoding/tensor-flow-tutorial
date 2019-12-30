const reverseComplementString = require('./reverse-complement-string.js');
const findTopOccurringKmers = require('./find-top-occurring-k-mers');
const countPatternOccurences = require('./count-pattern-occurences');
const countNonOverlappingPatternOccurences = require('./count-non-overlapping-pattern-occurences');
const findStartingIndexesOfPattern = require('./find-starting-indexes-of-pattern');
const listKMersInGenome = require('./list-k-mers-in-genome');
const filterKMersByOccurrence = require('./filter-k-mers-by-occurrence');
const checkIfClump = require('./check-if-clump');
const findClumpedKMers = require('./find-clumped-k-mers');
const numberToPattern = require('./number-to-pattern');
const patternToNumber = require('./pattern-to-number');

module.exports = {
    reverseComplementString,
    findTopOccurringKmers,
    countPatternOccurences,
    countNonOverlappingPatternOccurences,
    findStartingIndexesOfPattern,
    listKMersInGenome,
    filterKMersByOccurrence,
    checkIfClump,
    findClumpedKMers,
    numberToPattern,
    patternToNumber,
}
