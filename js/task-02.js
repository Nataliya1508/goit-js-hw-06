const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const listOfIngredients = document.createElement("ul");
// console.log(listOfIngredients); 

// document.body.appendChild(listOfIngredients);

// const ul = document.querySelector("ul");

// const createLiFromArray = (array) => array.map((el) => `<li class="item">${el}</li>`).join("");
// const list = createLiFromArray(ingredients);
// console.log(createLiFromArray(ingredients));
// //  list.classList.add = ('item');


// ul.insertAdjacentHTML("beforeend", list);

// const liClass = document.querySelectorAll("li");

// console.log(liClass); 

// liClass.classList.add('item')

const listOfIngredients = ingredients.map(el => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = el;
    return li
});

document.querySelector('#ingredients').append(...listOfIngredients);