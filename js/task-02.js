const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngredients = ingredients.map(el => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = el;
    return li
});

document.querySelector('#ingredients').append(...listOfIngredients);