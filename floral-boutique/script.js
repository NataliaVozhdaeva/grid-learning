const category = document.querySelector('[name="category"]');
const flowers = document.querySelector('[name="flowers"]');
const prices = document.querySelector('[name="price"]');
const cards = document.querySelectorAll('.card');

const filterFunctionFor3 = (e, typeFilter, rg1, arg2, ard3) => {
  cards.forEach((item) => {
    item.style.display = 'block';
  });

  switch (e.target.value) {
    case rg1:
      cards.forEach((item) => {
        if (!item.getAttribute(typeFilter).includes(rg1)) {
          item.style.display = 'none';
        }
      });
      break;
    case arg2:
      cards.forEach((item) => {
        if (!item.getAttribute(typeFilter).includes(arg2)) {
          item.style.display = 'none';
        }
      });
      break;
    case ard3:
      cards.forEach((item) => {
        if (!item.getAttribute(typeFilter).includes(ard3)) {
          item.style.display = 'none';
        }
      });
      break;
    default:
      cards.forEach((item) => {
        item.style.display = 'block';
      });
  }
};

category.addEventListener('click', (e) => {
  filterFunctionFor3(e, 'category', 'mono', 'bright', 'pastel');
});

prices.addEventListener('click', (e) => {
  filterFunctionFor3(e, 'price', 'less2000', 'from2to3', 'from3000');
});
