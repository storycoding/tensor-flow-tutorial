// create an algorithm that lists all the k-mers
// forming clumps of a certain length in a given genome
// Note: it must handle genomes 10 million chars long

const checkIfClump = require('./check-if-clump');
const filterKMersByOccurrence = require('./filter-k-mers-by-occurrence');
const listKMersInGenome = require('./list-k-mers-in-genome');

const findClumpedKMers = (genome, kMerLength, oriLength, occurences) => {
    const kMersList = listKMersInGenome(genome, kMerLength);
    const filteredKMers = filterKMersByOccurrence(kMersList, occurences);
    const clumpedKMers = [];

    filteredKMers
        .forEach( ( kMer ) => {
            checkIfClump(kMer.indexes, kMerLength, oriLength, occurences ) ?
            clumpedKMers.push(kMer.sequence) : null
        }
    );

    return clumpedKMers.join(" ");
}

module.exports = findClumpedKMers;
