const getNucleotideValue = (nucleotide) => {
    if (!nucleotide) { throw new Error("no nucleotide") }
    const nucleotideValues = {
        "A" : 0,
        "C" : 1,
        "G" : 2,
        "T" : 3
    }

    return nucleotideValues[nucleotide];
}

module.exports = getNucleotideValue;