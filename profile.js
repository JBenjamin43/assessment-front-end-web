const colorbtn = document.querySelector('#color')
const placebtn = document.querySelector('#place')
const ritualbtn = document.querySelector('#ritual')

const colorClick = () => {
    alert('olive green')
}

const placeClick = () => {
    alert('home')
}

const ritualClick = () => {
    alert('cheersing to the ones we lost before a shot')
}


colorbtn.addEventListener('click', colorClick)
placebtn.addEventListener('click', placeClick)
ritualbtn.addEventListener('click', ritualClick)