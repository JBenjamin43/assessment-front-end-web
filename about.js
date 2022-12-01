console.log("hello world");


const picture = document.querySelector('img')

function handleSubmit(evt) {
	evt.preventDefault();
	alert('thank you for sumbiting')
}

const imageHover = () => {
	alert('you have kind eyes')
}

const giveComp = () => {
	
	alert('at least you not the ugliest person in the room')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

picture.addEventListener('mouseover', imageHover)