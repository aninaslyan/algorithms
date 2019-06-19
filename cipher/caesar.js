function caesar(plainText, step) {
    console.log(typeof step);
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let coded = "";

    for (let i=0; i<plainText.length; i++) {
        let index = alphabet.indexOf(plainText[i]);
        let newIndex = index + step;

        if(newIndex > 25) {
            newIndex -= 26;
        }
        if(plainText[i] === plainText[i].toUpperCase()) {
            coded += alphabet[newIndex].toUpperCase();
        } else {
            coded += alphabet[newIndex];
        }

        if(plainText[i] === " ") {
            coded = coded + alphabet[newIndex] + " ";
        }
    }
    return coded;
}
