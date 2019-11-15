const checkIfClump = (list, kMerLength, oriLength, occurences) => {
    for (let i = 0; i < list.length; i++) {
        const first = list[i];
        const last = list[i + occurences - 1];
        if( ( last + kMerLength - first ) <= oriLength) {
            return true;
        }
    }

    return false;
}

module.exports = checkIfClump;
