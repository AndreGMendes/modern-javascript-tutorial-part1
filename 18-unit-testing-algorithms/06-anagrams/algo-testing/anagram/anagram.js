function anagram(str1, str2) {
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagram;


// -------------



// ------------Simple Explaination
// function anagram(str1, str2) {
//   const aCharMap = buildCharMap(str1);
//   const bCharMap = buildCharMap(str2);

//   console.log(aCharMap, bCharMap);
// }


// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//     // charMap[`My Character - ${char}`] = charMap[`My Character - ${char}`] + 1 || 1;
//   }

//   return charMap;
// }

// anagram('hello','world')
