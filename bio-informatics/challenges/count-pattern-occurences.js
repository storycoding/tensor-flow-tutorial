// return the amount of times the sequence repeats itself over the string
// count the overlaps as well

const countPatternOccurences = (string, sequence, count = 0) => {

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < sequence.length; j++) {

            if (string[i+j] != sequence[j]) {
                break;

            } else {
                if (j === sequence.length-1) {
                    count++;
                }
            }
        }
        
    }

    return count;
}

module.exports = countPatternOccurences;