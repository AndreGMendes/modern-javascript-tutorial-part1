// ------------------------------------------------------------
// RECURSIVE FUNCTION -----------------------------------------
// ------------------------------------------------------------
// const myfunction = () => {
//   const maximumRecursiveFunctionCalls = 10000
//   recursiveFunctionCallNumber = 0

//   while (recursiveFunctionCallNumber < maximumRecursiveFunctionCalls) {
//     recursiveFunctionCallNumber++;
//     console.log(`Cycle nº ${recursiveFunctionCallNumber}`)
//   }
//   recursiveFunctionCallNumber !== maximumRecursiveFunctionCalls ? myfunction() : console.log(`Recursive Function Call ended after ${recursiveFunctionCallNumber} calls`);
// }

// myfunction();

// ------------------------------------------------------------
// RETURN EXAMPLE ---------------------------------------------
// ------------------------------------------------------------
// function ze (name) {
//   for (z = 0; z <= 10; z++) {
//     if (name === 'André') {
//       console.log(name, z)
//     } else {
//       console.log('function has returned', z)
//       return;
//     }
//   }
// }

// ze('AndréX');




// ------------------------------------------------------------
const image = document.querySelector('img');
let start;
let done = false;

function step(timestamp) {

  // console.log(timestamp);

  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  if (elapsed > 5000) {
    done = true;
    return
  }

  // if (done) {
  //   return;
  // }

  image.style.transform = `translateX(${elapsed / 6}px) rotate(${elapsed / 2}deg)`;

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
