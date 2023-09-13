// const poll = new Map();
// poll.set('React', 0);
// poll.set('Vue', 0);
// poll.set('Angular', 0);
// poll.set('Svelte', 0);
// poll.set('Other', 0);

// function submitForm(e) {
//   e.preventDefault();

//   const selectedOption = document.querySelector(
//     "input[name='poll-option']:checked"
//   );

//   if (!selectedOption) {
//     alert('Please select an option');
//     return;
//   }

//   let voteCount = poll.get(selectedOption.value);
//   poll.set(selectedOption.value, voteCount + 1);

//   displayResults();

//   // Disable form fields after submit
//   document
//     .getElementById('poll-form')
//     .querySelectorAll('input, button')
//     .forEach((el) => el.setAttribute('disabled', true));
// }

// function displayResults() {
//   const results = document.getElementById('results');
//   results.innerHTML = '';
//   for (let [option, votes] of poll) {
//     const optionElement = document.createElement('div');
//     optionElement.classList.add(
//       'border-bottom',
//       'p-2',
//       'd-flex',
//       'justify-content-between'
//     );
//     optionElement.innerHTML = `<strong>${option}: </strong> ${votes} votes`;
//     results.appendChild(optionElement);
//   }
// }

// document.getElementById('poll-form').addEventListener('submit', submitForm);








// ---------------------
// Isto está manhoso
// ---------------------
const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);

function submitForm(e) {
  e.preventDefault();

  const selectedOption = document.querySelector(
    "input[name='poll-option']:checked"
  );

  console.log(selectedOption);

  if (!selectedOption) {
    alert('Please select an option');
    return;
  }

  let voteCount = poll.get(selectedOption.value);
  poll.set(selectedOption.value, voteCount + 1);

  console.log(poll);

  displayResults();
  disableSelection('enabled');
 }

function displayResults() {
  const results = document.getElementById('results');
  results.innerHTML = '';

  for (let [option, votes] of poll) {
    const optionElement = document.createElement('div');
    optionElement.classList.add(
      'border-bottom',
      'p-2',
      'd-flex',
      'justify-content-between'
    );

    optionElement.innerHTML = 
    `
    <strong>${option}: </strong> ${votes} votes
    `;
    
    
    results.appendChild(optionElement);

    document.getElementById('reset-button').style.display = 'block';

  }
}

document.getElementById('poll-form').addEventListener('submit', submitForm);
document.getElementById('reset-button').addEventListener('click', resetVoteCount); 
 


function disableSelection(activeStatus) {
  document
    .getElementById('poll-form')
    .querySelectorAll('input, button')
    .forEach((el) => el.setAttribute(activeStatus, true));
}

function resetVoteCount() {
    poll.forEach((value, key, map) => {
    map.set(key, 0);
  });
}




// ---------------------
// Exemplo Iteração sobre um MAP
// ---------------------
function myMapFunction () {

  const myMap = new Map();

  myMap.set('Name', 'zé');
  myMap.set('Age', 33);
  myMap.set('Country', 'Portugal');
  
  for (const [property, value] of myMap) {
    ((property.charAt()[0].toLowerCase() + property.slice(1)) != ('name')) 
      ? console.log(`----> ${property} :: ${value}`) 
      : ``
  }
}



