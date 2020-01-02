const testDataSet = require('./test-data-set');

describe('reverseComplementString', () => {
    testDataSet('reverse-complement-string');
});

describe('findTopOccurringKmers', () => {
    testDataSet('find-top-occurring-k-mers');
});

describe('countPatternOccurences', () => {
    testDataSet('count-pattern-occurences');
});

describe('countNonOverlappingPatternOccurences', () => {
    testDataSet('count-non-overlapping-pattern-occurences');
});

describe('findStartingIndexesOfPattern', () => {
    testDataSet('find-starting-indexes-of-pattern');
});

describe('EPIC: find clumps of kmers', () => {
    describe('listKMersInGenome', () => {
        testDataSet('list-k-mers-in-genome');
    });
    describe('filterKMersByOccurrence', () => {
        testDataSet('filter-k-mers-by-occurrence');
    });
    describe('checkIfClump', () => {
        testDataSet('check-if-clump');
    });
    describe('findClumpedKMers', () => {
        testDataSet('find-clumped-k-mers');
    });
});

describe('patternToNumber', () => {
    testDataSet('pattern-to-number');
});

describe('numberToPattern', () => {
    testDataSet('number-to-pattern');
});

describe('computeFrequencies', () => {
    testDataSet('compute-frequencies');
});