const category = document.querySelector('[name="category"]');
const flowers = document.querySelector('[name="flowers"]');
const prices = document.querySelector('[name="price"]');
const cards = document.querySelectorAll('.card');

let filters = {
  category: [],
  prices: [],
};

const filterFunction = (e) => {
  if (e.target !== category && e.target !== prices) {
    cards.forEach((el) => (el.style.display = 'block'));

    Object.values(filters).forEach((filter) => {
      cards.forEach((el) => {
        if (!el.getAttribute('tags').includes(filter)) {
          el.style.display = 'none';
        }
      });
    });
  }
};

category.addEventListener('click', (e) => {
  if (e.target !== category && e.target !== prices && e.target !== flowers) {
    filters.category = e.target.value;
  }

  filterFunction(e);
});

prices.addEventListener('click', (e) => {
  if (e.target !== category && e.target !== prices && e.target !== flowers) {
    filters.prices = e.target.value;
  }

  filterFunction(e);
});

flowers.addEventListener('click', (e) => {
  if (e.target !== category && e.target !== prices && e.target !== flowers) {
    filters.flowers = e.target.value;
  }

  filterFunction(e);
});
