const apiUrl = 'https://jsonplaceholder.typicode.com/todos';


// MAIN FUNCTIONS
const getTodos = () => {
  fetch(apiUrl + '?_limit=10')
    .then(res => res.json())
    .then(data => {data.forEach(todo => addTodoToDom(todo))});
};


const addTodoToDom = (todo) => {
    const div = document.createElement('div');
    const title = document.createTextNode(todo.title)

    div.classList.add('todo')

    div.appendChild(title);
    div.setAttribute('data-id', todo.id);

    todo.completed ? div.classList.add('done') : null;

    document.getElementById('todo-list').appendChild(div);
}


const createTodo = (e) => {
    e.preventDefault();
  
    const inputedText = e.target.querySelector('#title').value

    const newTodo = {
      title: inputedText,
      completed: false,
    };
  
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => addTodoToDom(data));
  };


const toggleCompleted = (e) => {

    if (e.target.classList.contains('todo')) {

        e.target.classList.toggle('done');

        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
    }
};


const updateTodo = (id, completed) => {

    fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ completed }),
      headers: {'Content-Type': 'application/json'}
    })
        // .then(res => res.json())
        // .then(data => console.log(data));

  };


  const deleteTodo = (e) => {
    
    if (e.target.classList.contains('todo')) {
      const id = e.target.dataset.id;
      
      fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(() => e.target.remove());

    }

  };


const init = () => {

    // Automaticly runs this method as soon as the page is loaded
    document.addEventListener('DOMContentLoaded', getTodos);
    
    document.querySelector('#todo-form')
        .addEventListener('submit', createTodo);

    document.querySelector('#todo-list')
        .addEventListener('click', toggleCompleted);

    document.querySelector('#todo-list')
        .addEventListener('dblclick', deleteTodo);
}


init();





