const textInput = document.querySelector('input');
const textel = document.querySelector('#text')

console.log(textInput);
textInput.addEventListener('input', (event) => {
    textel.style.fontSize = `${event.currentTarget.value}px`
})

