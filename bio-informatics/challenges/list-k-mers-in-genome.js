const listKMersInGenome = (genome, kMerLength) => {
    const kMersList = {};
    
    for (let i = 0; i <= genome.length; i++) {
        let sequence = '';

        for (let j = 0; j < kMerLength; j++) {
            if( !genome[i+j] ) { break }

            sequence += genome[i+j];
        }

        if (kMersList[sequence]) {
            kMersList[sequence].occurences ++;
            kMersList[sequence].indexes.push(i);

        } else {
            kMersList[sequence] = {
                sequence,
                occurences: 1,
                indexes: [i]
            };
        }

        if( !genome[i+kMerLength] ) { break }
    }
    return Object.values(kMersList);
}

module.exports = listKMersInGenome;
