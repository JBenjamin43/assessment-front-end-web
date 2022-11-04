console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('thank you for sumbiting')
}

function giveComp() {
	evt.preventDefault();
	alert('at least you not the ugliest person in the room')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

content.addEventListener('onmouseover', giveComp)