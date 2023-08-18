

// DOM VARIABLES ---------------------------------------------
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formButton = itemForm.querySelector('button');
let isEditMode = false;


// INITIALIZE FUNCTION (Event Listeners) ---------------------
function init () {
    
    // EVENT LISTENERS -------------------------------------------
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearButton.addEventListener('click', clearAllItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems)
    
    
    // AUTOMATIC FUNCTIONS ---------------------------------------
    checkUIState();
}


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
    
    // Check for Edit Mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');
        
        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();

        isEditMode = false;
    } else {
        if (checkIfItemExists(newItem)) {
            alert('That item already exists!');
            return;
        }
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

function onClickItem (e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    } else if (e.target.id !== 'item-list'){
        setItemToEdit(e.target)
    }
    
}

function setItemToEdit(item) {
    isEditMode = true;

    itemList
        .querySelectorAll('li')
            .forEach(i => i.classList.remove('edit-mode'));

    item.classList.add('edit-mode');

    formButton.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formButton.style.backgroundColor = '#228B22';
    
    itemInput.value = item.textContent;
}

function removeItem (item) {
    
    if (confirm('Are you sure?')) {
        
        // Remoce item from DOM
        item.remove();

        // Delete item from Local Storage
        removeItemFromStorage(item.textContent);

        // Update UI
        checkUIState();
    }
   
}

function clearAllItems (e) {

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }

    // Delete from local Storage
    localStorage.removeItem('items')

    // Update UI
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

function checkIfItemExists (item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item)
    
}

// STATE FUNCTIONS -------------------------------------------
function checkUIState () {
    
    itemInput.value = '';

    const items = document.querySelectorAll('li');
    
    if (items.length === 0) {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearButton.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formButton.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formButton.style.backgroundColor = '#333';

    isEditMode = false;
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

function createIcon (classes) {
    const icon = document.createElement('i')
    icon.className = classes;
    return icon;
}


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

function displayItems () {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDom(item))
    
    checkUIState();
}


// LOCAL STORAGE FUNCTIONS -----------------------------------
function addItemToStorage (item) {
    
    // Gets all items from Storage if there's any
    const itemsFromStorage = getItemsFromStorage();
    
    // Add new item to the array
    itemsFromStorage.push(item);
    
    // Convert the array back to JSON string and save it to the Local Storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function getItemsFromStorage () {
    let itemsFromStorage;
    
    if (localStorage.getItem('items') === null) {
        itemsFromStorage = []
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;

}

function removeItemFromStorage (item) {
    let itemsFromStorage = getItemsFromStorage();

    // Filter out the item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    // Save the new updated items to the LocalStorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}


// START UP --------------------------------------------------
init();