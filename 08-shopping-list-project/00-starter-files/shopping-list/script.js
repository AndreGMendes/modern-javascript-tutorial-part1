// DOM VARIABLES ---------------------------------------------
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter')

// MAIN FUNCTIONS --------------------------------------------
function addItem (e) {
    
    // to prevent 'Event Bubbling'
    e.preventDefault();

    // Validation
    newItem = itemInput.value;
    if (newItem === '') {
        alert('Please add an item')
        return;
    }

    // Create Parent element
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    // Create Child elements
    const button = createButton ('remove-item btn-link text-red');
    
    // Append the button to the List Element
    li.appendChild(button);
    
    // Append the list element to the List of elements 
    itemList.appendChild(li); 


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
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearAllItems);


// AUTOMATIC FUNCTIONS ---------------------------------------
checkUIState();