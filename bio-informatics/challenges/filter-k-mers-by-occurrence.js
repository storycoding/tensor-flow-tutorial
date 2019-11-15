const filterKMersByOccurrence = (kMersList, occurences) => (
    kMersList.filter( kMer => (
        kMer.occurences === occurences
    ))
)

module.exports = filterKMersByOccurrence;
