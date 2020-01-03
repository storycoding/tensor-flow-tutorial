const getNucleotideValue = (nucleotide) => {
    if (nucleotide !== "A" && nucleotide !== "C" && nucleotide !== "G" && nucleotide !== "T") {
        throw new Error(`invalid input: ${nucleotide}`)
    }
    const nucleotideValues = {
        "A" : 0,
        "C" : 1,
        "G" : 2,
        "T" : 3
    }

    return nucleotideValues[nucleotide];
}

const getNucleotideByIndex = (index) => {
    if ( typeof index !== "number" || index < 0 || index > 3) {
        throw new Error(`invalid index: ${index}`)
    }
    const nucleotides = ["A", "C", "G", "T"];
    return nucleotides[index];
}

module.exports = {
    getNucleotideValue,
    getNucleotideByIndex,
}