const dropDownButton = document.getElementById('dropdown');
const menuDropItem = document.querySelectorAll('.menu__dropdown-item');

const dropMenu = () => {
  if (menuDropItem[0].classList.contains('opened')) {
    menuDropItem.forEach((item) => item.classList.remove('opened'));
  } else {
    menuDropItem.forEach((item) => item.classList.add('opened'));
  }
};

dropDownButton.addEventListener('click', dropMenu);
