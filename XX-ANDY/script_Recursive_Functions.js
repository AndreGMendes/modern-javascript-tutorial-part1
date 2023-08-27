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
  