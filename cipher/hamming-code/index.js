import hammingCode from './script.js';

console.log(hammingCode.encode('10011010'));
console.log(hammingCode.decode(hammingCode.encode('10011010')));
console.log(hammingCode.check('011100101010'));
console.log(hammingCode.correct('011100101010'));
console.log(hammingCode.decode(hammingCode.correct('001100101010')));

// console.log("Encode 1111: ", hammingCode.encode("1111"));
// console.log("Decode 0011111: ", hammingCode.decode(hammingCode.encode("1111")));
// console.log("Check 0011111: ", hammingCode.check(hammingCode.encode("1111")));
// console.log("Check 0001111: ", hammingCode.check("0001111"));
// console.log("Decode 0001111: ", hammingCode.decode("0001111"));
// console.log("Pure Decode (without correcting) 0001111: ", hammingCode.pureDecode("0001111"));
