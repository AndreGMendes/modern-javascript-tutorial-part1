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


// A version - Using 'Default' keyword gives error. (With Destructuring without aliases here on Export)
// export  {
//     capitalizeWords,
//     makeMoney
// }


// B version - Using 'Default' keyword gives error. (With Destructuring with aliases here on Export)
// export  {
//     capitalizeWords as capitalizeWordsCenas,
//     makeMoney as makeMoneyCenas
// }


// C version - Must use 'Default' keyword. (Without Destructuring without aliases here on Export)
// export  default {
//     capitalizeWords,
//     makeMoney
// }


// D version - Can't use 'Default' keyword. (Without Destructuring with aliases here on Export)
export {
    capitalizeWords as capitalizeWordsCenas,
    makeMoney as makeMoneyCenas
}

