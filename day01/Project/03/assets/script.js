let a = Number(prompt("enter a number", 0));
let b = Number(prompt("enter another number", 0));

function add() {
	return a + b;
}

function sub() {
	return a - b;
}

function mul() {
	return a * b;
}
function div() {
	return a / b;
}

function calculator(calc) {
	
	if(calc === add) {
		alert(add());
	} else if (calc === sub) {
		alert(sub());
	} else if(calc === mul){
		alert(mul());
	} else if(calc === div){
		alert(div());
	} else {
		alert("Try again and perform some operator");
	}

}

calculator(add);