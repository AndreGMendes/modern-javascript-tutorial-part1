// ---------------------------------------------------------------------------------------------------
// IIFE example (if there's more than one expression inside the {} the 'return' kwyword is needed)
// ---------------------------------------------------------------------------------------------------
// console.log(((a, b) => {
//     const chuck = 42;
//     return a + b + chuck;
//   })(2,5));


// const example2 = ((a, b) => {
//     const chuck = 42;
//     return a + b + chuck;
//   })(2,5);

// console.log(example2)



// ---------------------------------------------------------------------------------------------------
// Calling a function that takes as arguments two other function callings.
// ---------------------------------------------------------------------------------------------------
const giveMeARandomNumber = (a, b) => {
    const chuck = 35;
    const max = 11;
    return (Math.floor(Math.random() * max)) + a + b + chuck;
  };

  const giveMeTheAttributeName = (text) => {
    return `The Random Value is: `;
  };
  

  function test (someRandomValue, someAttribute) { // Note the order of the arguments when calling the function
    console.log(`${someAttribute}: ${someRandomValue}`)
  }

  test(giveMeARandomNumber(2,3), giveMeTheAttributeName());