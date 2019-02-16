let newElement =document.createElement("p");

newElement.textContent = "Hello JavaScript!";
newElement.innerHTML = "I love <strong>JavaScript</strong>"

let content = document.getElementById("body");
content.innerHTML = "I love <strong>JavaScript</strong>";

let list = document.createComment("ul");
list.innerHTML = "<li>Buy groceries</li><li>Feed the cat</li><li>Do laundry</li>"
content.innerHTML = list.innerHTML;
let newChild = document.createElement("li");
newChild.textContent = "Go shopping";
content.appendChild(newChild);
content.removeChild(newChild);