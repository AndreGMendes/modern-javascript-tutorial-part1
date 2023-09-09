// ------------------------------------------------------------
// RECURSIVE FUNCTION -----------------------------------------
// ------------------------------------------------------------
const myfunction = () => {
    const maximumRecursiveFunctionCalls = 10000
    recursiveFunctionCallNumber = 0
  
    while (recursiveFunctionCallNumber < maximumRecursiveFunctionCalls) {
      recursiveFunctionCallNumber++;
      console.log(`Cycle nº ${recursiveFunctionCallNumber}`)
    }
   
    recursiveFunctionCallNumber !== maximumRecursiveFunctionCalls ? myfunction() : console.log(`Recursive Function Call ended after ${recursiveFunctionCallNumber} calls`);
  }

  myfunction();


// ------------------------------------------------------------
// RETURN EXAMPLE ---------------------------------------------
// ------------------------------------------------------------
  function ze (name) {
  
    for (z = 0; z <= 10; z++) {
  
      if (name === 'André') {
        console.log(name, z)
      } else {
        console.log('function has returned', z)
        return;
      }
    }
  }
  
  ze('AndréX');
  

// ------------------------------------------------------------
// EXAMPLE 'For Loop' on Object's Entries ---------------------
// ------------------------------------------------------------
for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}