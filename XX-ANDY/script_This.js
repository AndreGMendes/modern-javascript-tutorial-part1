// --------------------------------------------------------
// REGULAR FUNCTIONS BIND THE 'THIS' KEYWORD AUTOMATICALY TO AN OBJECT DEPENDING ON WHERE THE FUNCTION IS BEING CALLED


// --------------------------------------------------------
// EXAMPLE 1
// --------------------------------------------------------
// In ARROW Functions the 'THIS' Keyword refers to where the Arrow function is defined.
// In the example bellow the arrow function is defined inside the person object, 
// so the 'THIS' keyword will point to the age of the person.

// When a regular function is defined inside another function which is itself inside and Object, 
// when called it will look on the window object. 

var personA = {
    age: 28,
    greet1: function () {
        console.log('SCOPE :::: From REGULAR Function', this)
        console.log('From REGULAR Function', this.age) // THIS in REGULAR functions refers to the Object that is currently calling the function.

        function greet1_A () {
            console.log('SCOPE :::: From NESTED REGULAR Function', this)
            console.log('From NESTED REGULAR Function', this.age) // THIS in REGULAR functions refers to the Object that is currently calling the function.
        };
        greet1_A();

    }
}



var personB = {
    age: 28,
    greet1: function () {
        console.log('SCOPE :::: From REGULAR Function', this)
        console.log('From REGULAR Function', this.age) // THIS in REGULAR functions refers to the Object that is currently calling the function.

        const greet2_A = () => {
            console.log('SCOPE :::: From NESTED ARROW Function', this)
            console.log('From NESTED ARROW Function', this.age) // THIS in REGULAR functions refers to the Object that is currently calling the function.
        }
        greet2_A();
    }
}



var personC = {
    age: 28,
    greet1: () => {
        console.log('SCOPE :::: From REGULAR Function', this)
        console.log('From REGULAR Function', this.age) // THIS in REGULAR functions refers to the Object that is currently calling the function.

        const greet2_A = () => {
            console.log('SCOPE :::: From NESTED ARROW Function', this)
            console.log('From NESTED ARROW Function', this.age) // THIS in REGULAR functions refers to the Object that is currently calling the function.
        }
        greet2_A();
    }
}

const example1_This = () => {
    personA.greet1();
    console.log('----\n----')
    
    personB.greet1();
    console.log('----\n----')
    
    personC.greet1();
}


// --------------------------------------------------------
// EXAMPLE 2 (Class example)

let person;

class Person {
    
    constructor(name) {
        this.name = name;
    }

    printNameArrow () {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)

    }


    printNameFunction () {
        setTimeout(function () {
            console.log('Function: ' + this.name)
        }, 100)

    }
}


const example2_This = () => {
    person = new Person ('Zé');
    person.printNameArrow();
    person.printNameFunction(); 
}

// --------------------------------------------------------


// MAIN Example Selector ----------------------------------
// (Choose the example to run by uncommenting the method(s) bellow inside the 'allExamples' function expression.)

const allExamples = () => {
    //example1_This();
    example2_This();
}



// MAIN Runner --------------------------------------------
allExamples();
