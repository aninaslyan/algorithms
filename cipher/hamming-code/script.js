function encode(input) {
   let numberOfBits = 0;
   let inputLength = input.length;

   // length + numOfBits + 1 <= 2^numOfBits
   while (!(inputLength + numberOfBits + 1 <= Math.pow(2, numberOfBits))) {
      numberOfBits++;
   }

   let inputIndexPointer = 0;
   let dataSequence = {};
   let binary;
   let arrayLength = input.length + numberOfBits;
   let binaryArray = [];

   for (let i = 1; i <= arrayLength; i++) {
      // if it's a power of 2, push an empty location that will be filled later
      if ((Math.log(i) / Math.log(2)) % 1 === 0) {
         dataSequence[i] = new ParityBit(i);
      } else {
         dataSequence[i] = input.charAt(inputIndexPointer);
         inputIndexPointer++;
      }

      binary = i.toString(2); // now generate the value for our binary table
      binary = "0000000000000000" + binary; // add leading zeros ...
      binary = binary.slice(-1 * (numberOfBits)); // ... and cut the string back down to size
      binaryArray.push(binary);
   }
   // assign "responsibleFor" bits to all the parity bits, and then assign each
   // parity bit a value to match the even or odd mode. this is only the first pass
   for (let j = 0; j < numberOfBits; j++) {
      // get position of parity bit
      let position = Math.pow(2, j);

      let responsibleFor = {};

      for (let k = 1; k <= arrayLength; k++) {
         if (binaryArray[k - 1].charAt(numberOfBits - 1 - j) === "1") {
            // assign key and value
            responsibleFor[k] = (dataSequence[k] instanceof ParityBit) ? null : dataSequence[k];
         }
      }

      dataSequence[position].assign(responsibleFor);
   }

   // do second pass to add in values for all the nulls
   for (let j = 0; j < numberOfBits; j++) {
      // get parity bit
      let current = dataSequence[Math.pow(2, j)];
      current.reCalc();
   }

   let dataString = '';
   for (let key in dataSequence) {
      dataString += dataSequence[key].toString();
   }

   return dataString;
}

function ParityBit(position) {
   this.responsibleFor = {};
   this.position = position;
   this.value = undefined;

   this.assign = function (responsibleFor) {
      this.responsibleFor = responsibleFor;
   };

   this.reCalc = function () {
      for (let key in this.responsibleFor) {
         if (this.responsibleFor.hasOwnProperty(key)) {
            // if it's in the set of 2^n, then we're looking at the value of a parity bit
            if (Math.log(key) / Math.log(2) % 1 === 0) {
               this.responsibleFor[key] = (this.responsibleFor[key] === null && this.isEven()) ? "0" : "1";

               // and finally assign the value of this ParityBit object
               if (key === this.position.toString()) {
                  this.value = this.responsibleFor[key];
               }
            }
         }
      }
   };

   // iterate through each bit in responsibleFor and calculate whether the
   // bit holds an even or odd value
   this.isEven = function () {
      let count = 0;
      for (let key in this.responsibleFor) {
         if (this.responsibleFor.hasOwnProperty(key)) {
            count += (this.responsibleFor[key] !== null) ? parseInt(this.responsibleFor[key]) : 0;
         }
      }
      return count % 2 === 0;
   };

   this.toString = function () {
      return this.value;
   };
}

function pureDecode(input) {
   if (typeof input !== 'string' || input.match(/[^10]/)) {
      return console.error('hamming-code error: input should be binary string, for example "101010"');
   }

   let controlBitsIndexes = [];
   let l = input.length;
   let originCode = input;
   let i;

   i = 1;
   while (l / i >= 1) {
      controlBitsIndexes.push(i);
      i *= 2;
   }

   controlBitsIndexes.forEach(function (key, index) {
      originCode = originCode.substring(0, key - 1 - index) + originCode.substring(key - index);
   });

   return originCode;
}

/**
 * decode - decodes encoded binary string, also try to correct errors
 * @param {String} input - binary string, '10101'
 * @returns {String} - decoded binary string
 */
function decode(input) {
   if (typeof input !== 'string' || input.match(/[^10]/)) {
      return console.error('hamming-code error: input should be binary string, for example "101010"');
   }

   let controlBitsIndexes = [];
   let sum = 0;
   let l = input.length;
   let i = 1;
   let output = pureDecode(input);
   let inputFixed = encode(output);


   while (l / i >= 1) {
      controlBitsIndexes.push(i);
      i *= 2;
   }

   controlBitsIndexes.forEach(function (i) {
      if (input[i] !== inputFixed[i]) {
         sum += i;
      }
   });

   if (sum) {
      output[sum - 1] === '1'
         ? output = replaceCharacterAt(output, sum - 1, '0')
         : output = replaceCharacterAt(output, sum - 1, '1');
   }
   return output;
}

/**
 * check - check if encoded binary string has errors, returns true if contains error
 * @param {String} input - binary string, '10101'
 * @returns {Boolean} - hasError
 */
function check(input) {
   if (typeof input !== 'string' || input.match(/[^10]/)) {
      return console.error('hamming-code error: input should be binary string, for example "101010"');
   }

   let inputFixed = encode(pureDecode(input));
   return inputFixed === input;
}

function correct(input) {
   if (typeof input !== 'string' || input.match(/[^10]/)) {
      return console.error('hamming-code error: input should be binary string, for example "101010"');
   }

   return encode(pureDecode(input));
}

/**
 * replaceCharacterAt - replace character at index
 * @param {String} str - string
 * @param {Number} index - index
 * @param {String} character - character
 * @returns {String} - string
 */
function replaceCharacterAt(str, index, character) {
   return str.substr(0, index) + character + str.substr(index + character.length);
}


export default {
   encode,
   pureDecode,
   decode,
   check,
   correct
};
