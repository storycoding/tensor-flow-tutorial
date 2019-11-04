const reverseComplementString = (dnaString) => {
    let reversedDnaString = "";

    for (let i = (dnaString.length - 1); i >= 0; i--) {
        const nucleobase = dnaString[i];
        switch (nucleobase) {
            case "A":
                reversedDnaString += "T";
                break;
            case "T":
                reversedDnaString += "A";
                break;
            case "G":
                reversedDnaString += "C";
                break;
            case "C":
                reversedDnaString += "G";
                break;
        }
    }

    return(reversedDnaString);
}

module.exports = reverseComplementString;