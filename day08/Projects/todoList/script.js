let todoItemName = document.querySelector('.todo-name');
let ul = document.querySelector('.todo-list');
let completedTodo = document.querySelector('.show-completed');
let activeTodo = document.querySelector('.show-active');
let allTodo = document.querySelector('.show-all');
let i = 0;
let active = "completed";
let todo = [
  {
    "name": "Learn NOde",
    "status": false,
    id: i++
  },
  {
    "name": "Learn DOM",
    "status": false,
    id: i++
  },
  {
    "name": "Learn React",
    "status": false,
    id: i++
  },
  {
    "name": "Learn Animations",
    "status": false,
    id: i++
  }
];


function displayTodo(arr) {
  ul.innerHTML = '';
  arr.forEach((item) => {
    const input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('checkbox');
    input.setAttribute("data-id", item.id);
    input.checked = item.status;

    input.addEventListener('click', toggleStatus);

    const span = document.createElement('span');
    span.innerText = item.name;

    const div = document.createElement('div');
    div.innerText = "X";
    div.classList.add('cross');
    div.setAttribute('data-id', item.id)
    div.addEventListener('click', deleteTodo);
    

    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(div);
    
    ul.appendChild(li);
  });
}

function addTodo(todoName) {
  let todoItem = {
    name: todoName,
    status: false,
  };
  if (todoName) {
    todo.push(todoItem);
  }
  todoItemName.value = '';
  displayTodo(todo);
}

function toggleStatus(event) {
  console.log(event.target)
  if (event.target.localName === 'input') {
    const index = event.target.dataset.id;
    console.log(index)
    todo[index].status = !todo[index].status;
    // displayTodo(todo);
  }
}

function deleteTodo(e) {
  if (event.target.localName === 'div') {
    const index = e.target.dataset.id;
    todo.splice(index, 1);
  }
  displayTodo(todo);
}

function showComplented() {
  let arr =  todo.filter(item => item.status === true);
  displayTodo(arr);
}
function showAll() {
  displayTodo(todo);
}

function showActive() {
  let arr = todo.filter(item => item.status === false);
  displayTodo(arr);
}
completedTodo.addEventListener('click', showComplented);
activeTodo.addEventListener('click', showActive);
allTodo.addEventListener('click', showAll);

let addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', () => addTodo(todoItemName.value));


displayTodo(todo);
