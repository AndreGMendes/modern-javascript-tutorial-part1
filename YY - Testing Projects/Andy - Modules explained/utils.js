const message = {
    id: 1,
    text: 'hello world my name is zé manel.'
}


function capitalizeWords (str) {
    return str
        .toLowerCase()
        .split(' ')
        .map ((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
}


function makeMoney (amount) {
    return `$${amount}`
}


// MODULE EXPORTS
module.exports = {
    message,
    capitalizeWords,
    makeMoney,
}










// OR


// module.exports = {
//     id: 1,
//     text: 'Hello World'
// }