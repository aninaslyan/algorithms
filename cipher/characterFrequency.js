function getFrequency(plainText) {
    let freq = {};
    plainText = plainText.toLowerCase();
    for (let i = 0; i < plainText.length; i++) {
        let character = plainText.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    for (let key in freq) {
        if (freq.hasOwnProperty(key)) {
            freq[key] = freq[key] * 100 / plainText.length;
        }
    }

    return Object.entries(freq).map(([label, y]) => ({label, y}));
}
