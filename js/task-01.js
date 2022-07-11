const categoryEl = document.querySelectorAll('.item');
// console.log(categoryEl);
const lengthCategoryEl = categoryEl.length;
console.log('Number of categories:', lengthCategoryEl);

categoryEl.forEach(function (el, index) {
    const numberOfElements = el.querySelectorAll('li');
    const nameOfElements = el.querySelector('h2');
    console.log(`Category: ${nameOfElements.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
});
