const {
    reverseComplementString,
    findTopOccurringKmers,
    countPatternOccurences,
    countNonOverlappingPatternOccurences,
    findStartingIndexesOfPattern,
    listKMersInGenome,
    filterKMersByOccurrence,
    checkIfClump,
    findClumpedKMers,
} = require('./');

test('reverseComplementString', () => {
    const data = require('./test-data/reverse-complement-string.json');
    const { args, expected } = data;
    const [ dnaString ] = args;

    expect(
            reverseComplementString(dnaString)
        ).toEqual(
            expected
        );
    }
);

test('findTopOccurringKmers', () => {
    const data = require('./test-data/find-top-occurring-k-mers.json');
    const { args, expected } = data;
    const [ dnaString, length ] = args;

    expect(
        JSON.stringify(
            findTopOccurringKmers(dnaString, length)
            )
    ).toEqual(
        JSON.stringify(expected)
    );
    }
);

test('countPatternOccurences', () => {
    const data = require('./test-data/count-pattern-occurences.json');
    const { args, expected } = data;
    const [ dnaString, pattern ] = args;

    expect( 
        countPatternOccurences(dnaString, pattern)
    ).toEqual(expected);
    }
);

test('countNonOverlappingPatternOccurences', () => {
    const data = require('./test-data/count-non-overlapping-pattern-occurences.json');
    const { args, expected } = data;
    const [ dnaString, pattern ] = args;

    expect( 
        countNonOverlappingPatternOccurences(dnaString, pattern)
    ).toEqual(expected);
    }
);

test('findStartingIndexesOfPattern', () => {
    const data = require('./test-data/find-starting-indexes-of-pattern.json');
    const { args, expected } = data;
    const [ dnaString, pattern ] = args;

    expect( 
        JSON.stringify(
            findStartingIndexesOfPattern(dnaString, pattern)
        )
    ).toEqual(
        JSON.stringify(
            expected
        )
    );
    }
);
describe('EPIC: find clumps of kmers', () => {

    describe('listKMersInGenome', () => {
        const dataSet = require('./test-data/list-k-mers-in-genome.json');
    
        for (let i = 0; i < dataSet.length; i++) {
            const data = dataSet[i];
            const { args, expected } = data;
            test(`${JSON.stringify(args)}:${expected}`, () => {
                expect(
                    listKMersInGenome(...args)
                ).toEqual(expected);
            });
        }
    });

    describe('filterKMersByOccurrence', () => {
        const dataSet = require('./test-data/filter-k-mers-by-occurrence.json');
    
        for (let i = 0; i < dataSet.length; i++) {
            const data = dataSet[i];
            const { args, expected } = data;
            test(`${JSON.stringify(args)}:${expected}`, () => {
                expect(filterKMersByOccurrence(...args)).toEqual(expected);
            });
        }
    });
    
    describe('checkIfClump', () => {
        const dataSet = require('./test-data/check-if-clump.json');
    
        for (let i = 0; i < dataSet.length; i++) {
            const data = dataSet[i];
            const { args, expected } = data;
            test(`${JSON.stringify(args)}:${expected}`, () => {
                expect(checkIfClump(...args)).toEqual(expected);
            });
        }
    });

    describe('findClumpedKMers', () => {
        const dataSet = require('./test-data/find-clumped-k-mers.json');
    
        for (let i = 0; i < dataSet.length; i++) {
            const data = dataSet[i];
            const { args, expected } = data;
            test(`${JSON.stringify(args)}:${expected}`, () => {
                expect(findClumpedKMers(...args)).toEqual(expected);
            });
        }
    });
});

