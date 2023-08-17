const logo = document.querySelector('img');

const onClick = () => console.log('click event');

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
 
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);




// ------------------ CUSTOM Andy

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', onClear);

function onClear() {
  
  document.
    querySelector('#item-list-animals').
      querySelectorAll('li').forEach((item) => item.remove());
  
}




const onDoubleClick2 = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
 
};


clearBtn.addEventListener('dblclick', onDoubleClick2);




// let hasColor = document.body.style.backgroundColor !== 'purple'; 
// let backgroundColor = document.body.style.backgroundColor = 'white';
// let textColor = document.body.style.color = 'black'


// const onDoubleClick3 = () => {

//   switch (backgroundColor) {
//     case 'purple' : 
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//       break;
    
//     case 'white' : 
//       document.body.style.backgroundColor = 'purple';
//       document.body.style.color = 'white';
//       break;
    
//     default: console.log('No other color')
//   }

// };

// clearBtn.addEventListener('dblclick', onDoubleClick3);