
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
  
    console.log(data);
  }
  
  getDataUsingAWAIT();
  // -----------------------------------------------------------------------------------