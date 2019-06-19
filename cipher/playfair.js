function playfairCipher(keyword, plainText) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".replace("j","").split("");
    const key = [...new Set(keyword)];
    let tempString = "";


    let table = alphabet.filter(element => {
        return key.indexOf(element) === -1;
    });

    table = key.concat(table);

    console.log(table, "table");

    const string = plainText.replace(/ /g,'').split("");

    let tbl = key.reduce((result, value, index, array) => {
        if (index % 5 === 0)
            result.push(array.slice(index, index + 5));
        return result;
    }, []);

    console.log(tbl, "table");

    let stringTable = string.reduce((result, value, index, array) => {
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
        return result;
    }, []);

    console.log(stringTable, "stringTable");

    for (let i in stringTable) {

        let letter1 = stringTable[i][0];
        let letter2 = stringTable[i][1];

        if (letter1 === "j") {
            letter1 = "i"
        }
        else if (letter2 === "j") {
            letter2 = "i";
        }

        let letterPosition1 = table.indexOf(letter1);
        let letterPosition2 = table.indexOf(letter2);

        let min = Math.min(letterPosition1, letterPosition2);
        let max = Math.max(letterPosition1, letterPosition2);
        let minDistanceFromEdge = min % 5;
        let maxDistanceFromEdge = max % 5;
        let difference = Math.abs(letterPosition1 - letterPosition2);
        let mod5Result = difference % 5;

        // the same column
        if (mod5Result === 0) {

            if (letterPosition1 >= 20) { // If at the bottom of column
                tempString += table[letterPosition1 - 20]; // go up
                tempString += table[letterPosition2 + 5]; // choose element below
            }
            else if (letterPosition2 >= 20) {
                tempString += table[letterPosition1 + 5];
                tempString += table[letterPosition2 - 20];
            }
            else {
                tempString += table[letterPosition1 + 5];
                tempString += table[letterPosition2 + 5];
            }
        }
        // the same row
        else if ( difference <= 4 && maxDistanceFromEdge > minDistanceFromEdge ) {
            if (difference === 4) {
                if ( ((max + 1) % 5) === 0 ) {
                    if ( ( (letterPosition1 + 1) % 5) === 0 ) {
                        tempString += table[letterPosition1 - 4];
                        tempString += table[letterPosition2 + 1];
                    }
                    else if ( ( (letterPosition2 + 1) % 5) === 0  ) {
                        tempString += table[letterPosition1 + 1];
                        tempString += table[letterPosition2 - 4];
                    }
                }
            }
            else {
                if ( ( letterPosition1 + 1 ) % 5 === 0 ) {
                    tempString += table[letterPosition1 - 4];
                    tempString += table[letterPosition2 + 1];
                }
                else if ( ( letterPosition2 + 1 ) % 5 === 0 ) {
                    tempString += table[letterPosition1 + 1];
                    tempString += table[letterPosition2 - 4];
                }
                else {
                    tempString += table[letterPosition1 + 1];
                    tempString += table[letterPosition2 + 1];
                }
            }
        }

        // corners check
        else {

            let counter = min, rowD = 0;

            if ( (min + 1) % 5 === 0 || minDistanceFromEdge > maxDistanceFromEdge ) {
                while ( Math.abs(counter - max) % 5 !== 0 ) {counter--; rowD--;}
            }
            else{
                while ( Math.abs(counter - max) % 5 !== 0 ) {counter++; rowD++;}
            }

            if ( letterPosition1 === min ) {
                tempString += table[letterPosition1 + rowD];
                tempString += table[letterPosition2 - rowD];
            }
            else {
                tempString += table[letterPosition1 - rowD];
                tempString += table[letterPosition2 + rowD];
            }
        }
    }

    return tempString;
}