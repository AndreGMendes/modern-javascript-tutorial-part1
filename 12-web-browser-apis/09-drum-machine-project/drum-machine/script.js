

function playSound(e) {
  
  console.log(e.keyCode);
  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    console.log(`Not a valid Key`);
    return;
  }

  audio.currentTime = 0;


  audio.play();

  key.classList.add('playing');

  setTimeout(() => {
    key.classList.remove('playing');

  }, 100);
}


window.addEventListener('keydown', playSound);




// ----------------------




// ----------------------
// Function that adds an element 'h1' after an 'h2' to the DOM or replaces it 
// if it already exists
// ----------------------
const key = window.addEventListener('keydown', keycode);

function keycode (e) {
  const h1 = document.querySelector('header h1');  
  

  if (h1.nextElementSibling === null) {
    h2 = document.createElement('h2');
    h2.classList.add('info-key')
    h2.innerHTML = `<h2>${e.key} was pressed!</h2>`
    h2.setAttribute("style", "color: red; text-align: center; font-weight: bold")
    h1.insertAdjacentElement('afterend', h2)
  } else {
    h2 = document.querySelector('.info-key'); 
    h2.innerHTML = `<h2>${e.key} was pressed!</h2>`
  }
  console.log(e)
  return e
}  


