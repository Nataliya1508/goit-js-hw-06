

let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");



inputEl.addEventListener("input", onInputChange);


function onInputChange(event) {
  inputEl = event.currentTarget.value;
  console.log(inputEl);
  inputEl !== " " ? (outputEl.innerText = inputEl.trim()) : "Anonymous";
}

