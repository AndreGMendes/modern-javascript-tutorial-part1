  // Creating elements in the DOM
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const h2 = document.createElement('h2');

body.appendChild(h2)


// Fetching a JSON file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://ipinfo.io/85.247.188.246/geo')
  .then((response) => response.json())
  .then((data) => {
    (document.querySelector('h1').textContent = data.ip), 
    (document.querySelector('h2').textContent = data.country),
    (document.querySelector('h2').textContent = data.city),
    (document.querySelector('h2').textContent = org.city),
    (document.querySelector('h2').textContent = loc.city)
  })



