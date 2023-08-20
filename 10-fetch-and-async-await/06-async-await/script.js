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


// ---------



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

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);

  });

}



getData('https://jsonplaceholder.typicode.com/users')
  .then((userlist) => {
    console.log(userlist);
  })
  .catch((error) => console.log(error));



// ---------



// ASYNC with FETCH -----------------------------------------------------------

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

getUsers();



//  -----------------------------------------------------------

// const getPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   throw new Error('Hello');

//   console.log(data);
// };

// getPosts().catch((error) => console.log(error));
