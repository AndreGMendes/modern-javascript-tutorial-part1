// A version - IMPORTING ES MODULES (With Destructuring here, without Aliases on Export)
// import {capitalizeWords, makeMoney} from './modules/utils.js'
// import {Person} from './modules/Person.js'

// const phraseConverter = capitalizeWords('this is just a test.');
// const cashConverter = makeMoney(20);
// const person1 = new Person ('Zé', 33);

// console.log(phraseConverter, cashConverter, person1);




// B version - IMPORTING ES MODULES (With Destructuring here, with Aliases on Export)
// import {capitalizeWordsCenas, makeMoneyCenas} from './modules/utils.js'
// import {PersonCenas} from './modules/Person.js'

// const phraseConverter = capitalizeWordsCenas('this is just a test.');
// const cashConverter = makeMoneyCenas(20);
// const person1 = new PersonCenas ('Zé', 33);

// console.log(phraseConverter, cashConverter, person1);




// C version - IMPORTING ES MODULES (Without Destructuring here, without Aliases on Export) :: Import 'name' here can be anything
// import utilTools from './modules/utils.js'
// import PersonTools from './modules/Person.js'

// const phraseConverter = utilTools.capitalizeWords('this is just a test.');
// const cashConverter = utilTools.makeMoney(20);
// const person1 = new PersonTools.Person ('Zé', 33);

// console.log(phraseConverter, cashConverter, person1);




// D version - IMPORTING ES MODULES (Without Destructuring here, without Aliases on Export, with Aliases here on Import) :: Import 'name' here can be anything
import * as utilTools from './modules/utils.js'
import Person, { MobilePhone } from './modules/Person.js'
import Car from './modules/Person.js'


const phraseConverter = utilTools.capitalizeWordsCenas('this is just a test.');
const cashConverter = utilTools.makeMoneyCenas(20);

const person1 = new Person.Person ('Zé', 33);
const car1 = new Car.Car ('Fabia', 'Skoda');
const mobilePhone1 = new MobilePhone ('Fabia', 'Skoda');

console.log(phraseConverter, cashConverter, person1, car1, mobilePhone1);