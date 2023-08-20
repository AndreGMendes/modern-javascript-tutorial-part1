// PROMISE VS ASYNC/AWAIT
// 

// PROMISE --------------------------------------------------------
//
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'John', age: 20 });
//   }, 1000);
// });

// promise.then((data) => console.log(data));




// ASYNC with PROMISE -----------------------------------------------------------

// const promise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve({ name: 'John', age: 20 });
//   }, 1000);
// });


// async function getPromise() {
//   const response = await promise;
//   console.log(response);
// }

// getPromise();





// Get USERS: Using PROMISE -----------------------------------------------------------
function getDataUsingPROMISE(endpoint) {

  return new Promise((resolve, reject) => {
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    xhr.send();
  });
}


getDataUsingPROMISE('https://jsonplaceholder.typicode.com/users')
  .then((userlist) => {
    console.log(userlist);
  })
  .catch((error) => console.log(error));
// -----------------------------------------------------------------------------------




// Get USERS: Using FETCH -----------------------------------------------------------
// Fetching from an API
function getDataUsingFETCH () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {throw new Error('Request Failed!!!')}
      return response.json()})
    .then((data) => {
      console.log(data)})
    .catch((error) => {
      console.log(error);
});
}

getDataUsingFETCH();



    

// -----------------------------------------------------------------------------------




// Get USERS: Using ASYNC AWAIT -----------------------------------------------------------
async function getDataUsingAWAIT() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

getDataUsingAWAIT();
// -----------------------------------------------------------------------------------




// Get USERS: Using ASYNC AWAIT (Using an ARROW FUNCTION) ----------------------------
const getDataUsingAWAITArrowFunction = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // throw new Error('Hello');

  console.log(data);
};

getDataUsingAWAITArrowFunction().catch((error) => console.log(error));
