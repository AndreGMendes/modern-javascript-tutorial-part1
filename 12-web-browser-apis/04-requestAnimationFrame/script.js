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
// const image = document.querySelector('img');
// let start;
// let done = false;

// function step(timestamp) {
//   if (start === undefined) {
//     start = timestamp;
//   }

//   const elapsed = timestamp - start;

//   if (elapsed > 5000) {
//     done = true;
//   }

//   if (done) {
//     return;
//   }

//   image.style.transform = `translateX(${elapsed / 10}px) rotate(${
//     elapsed / 10
//   }deg)`;

//   requestAnimationFrame(step);
// }

// requestAnimationFrame(step);
