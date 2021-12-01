// Menu Block

const dropDownMenuButton = document.getElementById('dropdown');
const menuDropItem = document.querySelectorAll('.menu__dropdown-item');

const dropMenu = () => {
  if (menuDropItem[0].classList.contains('opened')) {
    menuDropItem.forEach((item) => item.classList.remove('opened'));
  } else {
    menuDropItem.forEach((item) => item.classList.add('opened'));
  }
};

// Industries Block

dropDownMenuButton.addEventListener('click', dropMenu);

const scienceDropDownButton = document.getElementById('industries__science');
const scienceText = document.querySelector('.industries__dropdown-text');

const scienceDropDown = () => {
  if (scienceText.classList.contains('selected')) {
    scienceText.classList.remove('selected');
    scienceDropDownButton.classList.remove('selected');
  } else {
    scienceText.classList.add('selected');
    scienceDropDownButton.classList.add('selected');
  }
};

scienceDropDownButton.addEventListener('click', scienceDropDown);
