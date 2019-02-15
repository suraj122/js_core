// alert(window.innerHeight);

document.body.style.background = "green";

setTimeout(() => document.body.style.background = "blue", 5000);
// alert(location.href);

// console.log(document.hasChildNodes());

// for (let node of document.body.childNodes) {
//     console.log(node);
// }

// Tasks

// console.log(document.body.firstElementChild);
// console.log(document.body.children[0]);

// console.log(document.body.children[1]);
// console.log(document.body.lastElementChild);

// console.log(document.body.children[1].lastElementChild);

// Table

let table = document.body.children[2];

for (let i = 0; i <= table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.background = "red";
}


