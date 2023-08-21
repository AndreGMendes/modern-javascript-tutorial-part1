
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
  
    //   setTimeout(() => {
    //     xhr.send();
    //   }, Math.floor(Math.random() * 3000) + 1000);
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
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  
getDataUsingFETCH();


// Example: using validations

//   function getDataUsingFETCH () {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         if (!response.ok) {throw new Error('Request Failed!!!')}
//         return response.json()})
//       .then((data) => {
//         console.log(data)})
//       .catch((error) => {
//         console.log(error);
//   });
//   }
  
//   getDataUsingFETCH();
// -----------------------------------------------------------------------------------



  
  
 // Get USERS: Using ASYNC AWAIT -----------------------------------------------------------
 async function getDataUsingAWAIT() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    // const dataInTextFormat = await res.text();
  
  
    console.log(data /*, dataInTextFormat */);
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
// -----------------------------------------------------------------------------------





// OTHER WAYS: Data, DataWithFetch, DataPromiseAll
// -----------------------------------------------------------------------------------
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 1000) + 1000);
  });
}
// -----------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------
async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}

async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}
// -----------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------
async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json'),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}
// -----------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------
async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
  ]);

  console.log(movies, actors, directors);
}
// -----------------------------------------------------------------------------------

console.log('----\n\n')

getAllData();
// getAllDataWithFetch();
// getAllDataPromiseAll();
// getAllDataPromiseAll2();


// const randomNumber = Math.floor(Math.random() * 3);;
// console.log(randomNumber)