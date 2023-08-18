// DOM VARIABLES ---------------------------------------------
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter')

// MAIN FUNCTIONS --------------------------------------------
function onAddItemSubmit (e) {
    
    // to prevent 'Event Bubbling'
    e.preventDefault();

    // Validation
    newItem = itemInput.value;
    if (newItem === '') {
        alert('Please add an item')
        return;
    }

    // Function for creating the element and adding it to the DOM
    addItemToDom (newItem);

    // Function for saving the item to the Browser's Local Storage
    addItemToStorage (newItem);


    // Check the UI for adding back the Filter and the Clear button
    checkUIState();

    // Clear the input
    itemInput.value = '';
}

function removeItem (e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    checkUIState();
}

function clearAllItems (e) {
    // itemList.remove();
    // itemInput.value = null;
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
    checkUIState();
}

function filterItems (e) {

    // Get all Items in the List
    const items = document.querySelectorAll('li');

    // Filter the input to lower case;
    const text = e.target.value.toLowerCase();
    console.log(text);

    items.forEach((item) => {

        const itemName = item.firstChild.textContent.toLowerCase();

        // Using the 'match()' method
        // if (!itemName.match(text)) {
        //     item.style.display = 'none';
        // } else {
        //     item.style.display = 'flex'
        // }

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none'
        }

    })

   
}

// STATE FUNCTIONS -------------------------------------------
function checkUIState () {

    const items = document.querySelectorAll('li');

    if (items.length === 0) {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearButton.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}


// ELEMENT FUNCTIONS -----------------------------------------
function createButton (classes) {
    const button = document.createElement('button')
    button.className = classes;

    // Apend icon to button
    const icon = createIcon ('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i')
    icon.className = classes;
    return icon;
}


// EVENT LISTENERS -------------------------------------------
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearAllItems);
itemFilter.addEventListener('input', filterItems);


// AUTOMATIC FUNCTIONS ---------------------------------------
checkUIState();


// DOM FUNCTIONS ---------------------------------------------
function addItemToDom (item) {

    // Create Parent element
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    // Create Child elements
    const button = createButton ('remove-item btn-link text-red');

    // Append the button to the List Element
    li.appendChild(button);

    // Append the list element to the List of elements 
    itemList.appendChild(li); 
}


// LOCAL STORAGE FUNCTIONS -----------------------------------
function addItemToStorage(item) {
    let itemsFromStorage;
    
    if (localStorage.getItem('items') === null) {
        itemsFromStorage = []
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    // Add new item to the array
    itemsFromStorage.push(item);

    // Convert the array back to JSON string and save it to the Local Storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}