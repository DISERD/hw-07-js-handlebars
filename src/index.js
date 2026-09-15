import { products } from './data.js';
import template from './template.hbs';

const container = document.querySelector('#products-container');
const form = document.querySelector('#add-form');

let list = [...products];

function render() {
  container.innerHTML = template(list);
}

render();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newProduct = {
    id: Date.now(),
    name: form.elements.name.value,
    price: Number(form.elements.price.value),
    description: form.elements.desc.value,
  };

  list.push(newProduct);
  render();
  form.reset();
});

container.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    const idToDelete = Number(e.target.dataset.id);

    list = list.filter(item => item.id !== idToDelete);
    render();
  }
});