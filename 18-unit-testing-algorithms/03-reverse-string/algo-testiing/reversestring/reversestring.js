// Solution 1
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2
// function reverseString(str) {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// Solution 3
function reverseString(str) {
  return str.split('').reduce((accumulator, currentValue) => currentValue + accumulator, '');
}



// ----------------
function stringToBinary(str) {
  let binaryString = '';

  for (let i = 0; i < str.length; i++) {
    // Get the character's Unicode code point
    const charCode = str.charCodeAt(i);
    
    // Convert the Unicode code point to binary and pad to 8 bits
    const binaryChar = charCode.toString(2).padStart(8, '0');
    
    // Concatenate the binary representation to the result
    binaryString += binaryChar;
  }

  // Replace with '-' for every 8 characters except at the end
  return binaryString.replace(/(.{8})(?!$)/g, '$1-');
}

// Example usage:
// const inputString = 'Hello';
// const binaryRepresentation = stringToBinary(inputString);
// console.log(binaryRepresentation); // Output: '01001000-01100101-01101100-01101100-01101111'



module.exports = {reverseString, stringToBinary};