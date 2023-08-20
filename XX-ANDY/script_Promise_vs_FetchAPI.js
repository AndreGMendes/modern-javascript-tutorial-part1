
 // Get USERS: Using PROMISE -----------------------------------------------------------

function getData(endpoint) {

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
  
  
  getData('https://jsonplaceholder.typicode.com/users')
    .then((userlist) => {
      console.log(userlist);
    })
    .catch((error) => console.log(error));
// -----------------------------------------------------------------------------------
  



 // Get USERS: Using FETCH -----------------------------------------------------------
 // Fetching from an API
 fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => console.log(data))
// -----------------------------------------------------------------------------------



  
  
  
 // Get USERS: Using ASYNC AWAIT -----------------------------------------------------------
  async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    console.log(data);
  }
  
  getUsers();
  // -----------------------------------------------------------------------------------