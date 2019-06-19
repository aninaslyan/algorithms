function distributedSecret(num) {
    let str = parseInt(num, 10);
    let str1 = [], str2 = [], str3 = [], s = [];

    str = (str).toString(2);
    console.log(str, "str");

    for (let i of str) {
        str1.push(Math.round(Math.random()));
    }
    for (let i of str) {
        str2.push(Math.round(Math.random()));
    }
    console.log(str1, "str1", str2, "str2");

    for (let i = 0; i < str.length; i++) {
        str3[i] = str1[i] ^ str2[i] ^ str[i];
    }

    console.log(str3, "str3");

    for (let i = 0; i < str.length; i++) {
        s[i] = str1[i] ^ str2[i] ^ str3[i];
    }

    return s;
}