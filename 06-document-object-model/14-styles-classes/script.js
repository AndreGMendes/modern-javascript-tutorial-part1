const text = document.querySelector('p');
const itemList = document.querySelector('.item-listXXXXXXXXXX, .items'); // Query selecting more than one class (testing)
const items = itemList.querySelectorAll('li');

function run() {
  // className - Gets a string of all classes
  console.log(itemList.className);
  // Changing the classes with className
  text.className = 'card dark';

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(itemList.classList);

  // We can loop through the classes
  itemList.classList.forEach((c) => console.log(c));

  // Add, remove, toggle, replace
  text.classList.add('dark');
  text.classList.remove('card');
  text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // style property - Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;



// AndreGM ::  Testing Stuff
const logMe = () => {console.log ("Zéeee"); return `Manel`};

function logMe2 () {
  console.log ("Zéeee"); 
  return `Manel`;
};

document.querySelector('button').onmouseover = logMe2;