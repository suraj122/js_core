'user strict';

let tag = document.querySelector(".btn");

// console.log(tag);

tag.onclick = function handleClick() {
	let userName = prompt("Enter your name.", "");

	tag.textContent = "Hello " + userName;
}