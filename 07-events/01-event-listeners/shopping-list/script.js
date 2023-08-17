const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// ---------------- OLD WAY
// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };
// ---------------- OLD WAY



// ---------------- MODERN WAY

// // addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));


// function onClear2() {
//   alert('Clear Items')
// }


// // Use named function
clearBtn.addEventListener('click', onClear);

// // removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// // Fire off event from JS
setTimeout(() => clearBtn.click(), 2000);
