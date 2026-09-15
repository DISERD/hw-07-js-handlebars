import { products } from './data.js';
import template from './template.hbs';

let currentProducts = [...products];

const container = document.querySelector('#products-container');
const addForm = document.querySelector('#add-form');

function renderProducts() {
  const markup = template(currentProducts);
  container.innerHTML = markup;
}

renderProducts();

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#product-name').value;
  const price = document.querySelector('#product-price').value;
  const description = document.querySelector('#product-desc').value;

  const newProduct = {
    id: Date.now(),
    name: name,
    price: Number(price),
    description: description
  };

  currentProducts.push(newProduct);

  renderProducts();

  addForm.reset();
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const idToDelete = Number(e.target.dataset.id);

    currentProducts = currentProducts.filter(product => product.id !== idToDelete);

    renderProducts();
  }
});