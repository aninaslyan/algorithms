function simpleReplacement(plainText, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let newAlphabet = [...alphabet];
    let coded = "", index = "", newIndex = "", final = [];

    let unique = [...new Set(plainText)];

    alphabet.forEach((value) => {
        unique.forEach(val => {
            if (value.includes(val)) {
                index = alphabet.indexOf(value);
                alphabet.splice(index, 1);
            }
        });
    });
    coded = unique.concat(alphabet);
    console.log(coded);

    key = key.split("");

    console.log(key);
    key.forEach(v => {
        newIndex = newAlphabet.findIndex(k => k === v);
        final.push(coded[newIndex]);
    });

    return final;
}
