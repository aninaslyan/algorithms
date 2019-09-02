function caesar(plainText, step) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let coded = "";

    for (let i = 0; i < plainText.length; i++) {
        let index = alphabet.indexOf(plainText[i].toLowerCase());
        let newIndex = index + step;

        if (isSpecialCharacter(plainText[i])) {
            coded += plainText[i];
            continue;
        }

        while (newIndex > 25) {
            newIndex -= 26;
        }

        if (plainText[i] === plainText[i].toUpperCase()) {
            coded += alphabet[newIndex].toUpperCase();
        } else {
            coded += alphabet[newIndex].toLowerCase();
        }
    }
    return coded;
}

function isSpecialCharacter(str) {
    return /[\d `~!@#$%^&*()\\-\_+=[\]{}\|;':",.<>\/?]/.test(str);
}
