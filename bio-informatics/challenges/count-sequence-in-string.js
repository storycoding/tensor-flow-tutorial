const string = "GGTGATACGGCTTACATACGGCATACGGCAGTGCATACGGCGAATACGGCATATACGGCATATACGGCATACGGCAAAAATGATACGGCGATACGGCATACGGCTATACGGCATACGGCAGCTTTACCATACGGCGGATACGGCTTTCATCCATACGGCTATACGGCGTGCGACATACGGCATACGGCATACGGCCCATACGGCTCAGCGGGTATACGGCATACGGCCGATACGGCCACAATACGGCGCATACGGCTTGCTGTCGACATACGGCAATACGGCGATACGGCTTATACGGCAGATCTATACGGCGCGACATACGGCACATATGTCAAGTATACGGCATATACGGCAATACGGCGATACGGCTCCGATACGGCGATACGGCATACGGCATACGGCAAATACGGCCGATACGGCGGCATACGGCTAATACGGCTGCCATACGGCGATACGGCGAAGTTCATACGGCATACGGCCCATACGGCGGATACGGCGTCGCTAGTATACGGCTACTATCTAGATACGGCAATACGGCATACGGCCAATACCCGAGATACGGCTTCGCTATACGGCATACGGCGTAACGCATGAATACGGCATACGGCCAGCCCCCCGTGGTATACGGCAGGGATACGGCATACGGCAATACGGCTATACGGCATACGGCATACGGCCACTATACGGCATACGGCGGATACGGCAATACGGCGGGCCAATACGGCCAGATACGGCTATACGGCGGGGGCATACATACGGCTATACGGCATACGGCTCTGACAATACGGCATACGGCCCCGTATACGGCACTATAATACGGCGATACGGCTGGTTCGTCGTTGGTATGATACGGCATACGGCATACGGCAGATACGGCCATACGGCTACAATACGGCAACGAATACGGCTCCGAACATACGGCAGATACGGCTCTGGGGACAAAATACGGCATACGGCTTGAGCATACGGC"
const sequence = 'ATACGGCAT';

// return the amount of times the sequence repeats itself over the string
// count the overlaps as well

const countSequencesInString = (string, sequence) => {
    let count = 0;
    let match = "";

    for (let i = 0; i < string.length; i++) {
        
        for (let j = 0; j < sequence.length; j++) {

            if (string[i] === sequence[j]) {
                match += string[i];
                console.log({match})
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

const countSequenceOverlapsInString = (string, sequence, count = 0) => {

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

const number = countSequenceOverlapsInString(string, sequence);
console.log({number});