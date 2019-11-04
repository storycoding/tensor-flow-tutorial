const reverseComplementString = require('./reverse-complement-string.js');
const countKMers = require('./count-k-mers');
const countPatternOccurences = require('./count-pattern-occurences');
const countNonOverlappingPatternOccurences = require('./count-non-overlapping-pattern-occurences');
const findStartingIndexesOfPattern = require('./find-starting-indexes-of-pattern');

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

test('countKMers', () => {
    const data = require('./test-data/count-k-mers.json');
    const { args, expected } = data;
    const [ dnaString, length ] = args;

    expect(
        JSON.stringify(
            countKMers(dnaString, length)
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
