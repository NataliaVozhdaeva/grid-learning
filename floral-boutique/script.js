const category = document.querySelector('[name="category"]');
const cards = document.querySelectorAll('.card');

category.addEventListener('click', (e) => {
  if (e.target.value !== category) {
    cards.forEach((item) => {
      item.style.display = 'block';
    });
    switch (e.target.value) {
      case 'mono':
        cards.forEach((item) => {
          if (!item.dataset.category.includes('mono')) {
            item.style.display = 'none';
          }
        });
        break;
      case 'bright':
        cards.forEach((item) => {
          if (!item.dataset.category.includes('bright')) {
            item.style.display = 'none';
          }
        });
        break;
      case 'pastel':
        cards.forEach((item) => {
          if (!item.dataset.category.includes('pastel')) {
            item.style.display = 'none';
          }
        });
        break;
      default:
        cards.forEach((item) => {
          item.style.display = 'block';
        });
    }
  }
});
