// given a list of indexes [0, 11, 41, 55, 60, 90 ]
      // iterate all indexes
        // if there is an occurences amount of indexes
        // that from the first index to the last + kMerLenth
        // is smaller than maxInterval
          // return true

const checkIfClump = (list, kMerLength, maxInterval, occurences) => {
    for (let i = 0; i < list.length; i++) {
        const first = list[i];
        const last = list[i + occurences - 1];
        if( ( last + kMerLength - first ) <= maxInterval) {
            return true;
        }
    }

    return false;
}

module.exports = checkIfClump;
