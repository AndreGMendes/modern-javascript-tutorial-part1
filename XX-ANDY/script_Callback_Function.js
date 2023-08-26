//  CALLBACK FUNCTIONS <3 <3
//
//
// function
function greet(name, cb) {
    console.log('Hi' + ' ' + name);
    cb();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);





// ANDY -------------------------------------------------

const someName = 'Zé'
const someOtherName = 'Manel';

// function firstName (name) {
//     return (`My name is ${name} `)
// }


// function lastName (name) {
//     return (`${name}`)
// }


// function helloMyNameIs (cb1, cb2) {
//     return cb1(someName) + cb2(someOtherName);
// }



const firstName = name => `My name is ${name} `
const lastName = name => `${name}`
const helloMyNameIs = (cb1, cb2) => cb1(someName) + cb2(someOtherName);



console.log(helloMyNameIs(firstName, lastName));