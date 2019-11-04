// return the amount of times the sequence repeats itself over the string
// don't count the overlaps

const countNonOverlappingPatternOccurences = (string, sequence) => {
    let count = 0;
    let match = "";

    for (let i = 0; i < string.length; i++) {
        
        for (let j = 0; j < sequence.length; j++) {

            if (string[i] === sequence[j]) {
                match += string[i];
                if( match === sequence) {
                    count ++;
                    i++;
                    break;

                } else {
                    i++;
                }

            } else {
                match = '';
                i++;
                break;
            }
        }
        
    }

    return count;
}

module.exports = countNonOverlappingPatternOccurences;
