// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
  
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}



// ----------- Creating insertAfter Challenge

// 1. New element to insert
const li = document.createElement('li');
li.textContent = 'Insert me after!'

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
InsertAfter(li, firstItem);

function InsertAfter(newElement, existingElement) {
  
  const ul = existingElement.parentElement;

  ul.insertBefore(newElement, existingElement.nextSibling)

  // existingElement.insertAdjacentElement('afterend', newElement) ---> Another way

}




insertElement();
insertText();
insertHTML();
insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
