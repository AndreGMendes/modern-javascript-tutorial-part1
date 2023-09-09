
const {capitalizeWords, makeMoney, message} = require('./utils')
const {Person} = require('./Person')


console.log(message);
console.log(capitalizeWords(message.text));
console.log(makeMoney(20));


const personA = new Person ('Zé', 33)
personA.greet()