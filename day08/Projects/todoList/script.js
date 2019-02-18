let todoItemName = document.querySelector('.todo-name');
let ul = document.querySelector('.todo-list');
let todo = [];


function displayTodo(arr) {
  ul.innerHTML = '';
  arr.forEach((item, i) => {
    const input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('checkbox');

    const span = document.createElement('span');
    span.innerText = item.name;

    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.appendChild(input);
    li.appendChild(span);

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
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => addTodo(todoItemName.value));
displayTodo(todo);