

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log("decrementBtn", decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log("incrementBtn", incrementBtn);

const valueEl = document.querySelector("#value");
console.log("counter", valueEl)

let counterValue = 0;
 
    
decrementBtn.addEventListener('click', handleDecrementButtonClick);

function handleDecrementButtonClick(event) {
    valueEl.textContent = counterValue -= 1;
}
 
    
incrementBtn.addEventListener('click', handleIncrementButtonClick);

function handleIncrementButtonClick(event) {
    valueEl.textContent = counterValue += 1;
}







