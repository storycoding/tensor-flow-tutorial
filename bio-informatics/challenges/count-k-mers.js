// return all the most frequence substrings of length
// count the overlaps too
// return multiple, or one, or an empty string

const countKMers = (string, length) => {
    const candidates = {};
    let highscore = 0;
    let winners = [];

    // iterate string
        // if we're at the last 13 digits, stop making sequences - there might be an edge case here!
        // check the next 13 entries
            // create a string of that sequence
                // if there is a key in candidates of that string
                    // increase its value
                // else
                    // candidates[key] = 1;
    
    for (let i = 0; i <= string.length; i++) {
        if ( (string.length - 13) < i ) { break }

        let sequence = '';
        for (let j = 0; j < length; j++) {
            sequence += string[i+j];
        }

        if (candidates[sequence]) {
            candidates[sequence] ++;
            if ( candidates[sequence] === highscore ) {
                winners.push(sequence);

            } else if ( candidates[sequence] > highscore ) {
                highscore = candidates[sequence];
                winners = [sequence];
            }

        } else {
            candidates[sequence] = 1;
        }
    }

    return winners;
}

module.exports = countKMers;