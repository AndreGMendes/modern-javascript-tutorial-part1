// Addind and removing elements from the DOM


document.addEventListener('click', () => {
    const thebody = document.querySelector('body');
    const newDiv = document.createElement('div');
    const newH2 = document.createElement('h2')
    const newText = document.createTextNode(`You've clicked a button`);

    const addedClass = newDiv.classList.add('myDiv')

    newDiv.appendChild(newH2);
    newH2.appendChild(newText);
    thebody.appendChild(newDiv);

    console.log(`${newH2.innerHTML}`)
})


document.addEventListener('dblclick', () => {
   
    const elements = document.getElementsByClassName('myDiv');
    
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);

        const thebody = document.querySelector('body');
        thebody.innerHTML = `<h1>All created Divs have been removed</h1>`;
    }



    console.log(`All created Divs have been removed`)
})