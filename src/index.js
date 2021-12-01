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

// Industries Mobile Block

dropDownMenuButton.addEventListener('click', dropMenu);

const industriesDropDownButton = document.getElementById('industries__button');
const industriesBlock = document.querySelector('.industries__dropdown-text');

const scienceDropDown = () => {
  if (industriesBlock.classList.contains('selected')) {
    industriesBlock.classList.remove('selected');
  } else {
    industriesBlock.classList.add('selected');
  }
};

industriesDropDownButton.addEventListener('click', scienceDropDown);

// Industries Desktop Block

const medicine = document.getElementById('medicine');
const pharma = document.getElementById('pharma');
const criminal = document.getElementById('criminal');
const agro = document.getElementById('agro');
const materials = document.getElementById('materials');
const science = document.getElementById('science');
const food = document.getElementById('food');
const eco = document.getElementById('eco');
const energy = document.getElementById('energy');

const industryCards = document.querySelectorAll('.industries__card');
const industryButtons = document.querySelectorAll('.industries__item');

const medicineBtn = document.getElementById('medicineBtn');
const pharmaBtn = document.getElementById('pharmaBtn');
const criminalBtn = document.getElementById('criminalBtn');
const agroBtn = document.getElementById('agroBtn');
const materialsBtn = document.getElementById('materialsBtn');
const scienceBtn = document.getElementById('scienceBtn');
const foodBtn = document.getElementById('foodBtn');
const ecoBtn = document.getElementById('ecoBtn');
const energyBtn = document.getElementById('energyBtn');

const activateMedicine = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  medicine.classList.add('active');
  medicineBtn.classList.add('active');
};
const activatePharma = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  pharma.classList.add('active');
  pharmaBtn.classList.add('active');
};
const activateCriminal = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  criminal.classList.add('active');
  criminalBtn.classList.add('active');
};
const activateAgro = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  agro.classList.add('active');
  agroBtn.classList.add('active');
};
const activateMaterials = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  materials.classList.add('active');
  materialsBtn.classList.add('active');
};
const activateScience = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  science.classList.add('active');
  scienceBtn.classList.add('active');
};
const activateFood = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  food.classList.add('active');
  foodBtn.classList.add('active');
};
const activateEco = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  eco.classList.add('active');
  ecoBtn.classList.add('active');
};
const activateEnergy = () => {
  industryCards.forEach((card) => card.classList.remove('active'));
  industryButtons.forEach((button) => button.classList.remove('active'));
  energy.classList.add('active');
  energyBtn.classList.add('active');
};

medicineBtn.addEventListener('click', activateMedicine);
pharmaBtn.addEventListener('click', activatePharma);
criminalBtn.addEventListener('click', activateCriminal);
agroBtn.addEventListener('click', activateAgro);
materialsBtn.addEventListener('click', activateMaterials);
scienceBtn.addEventListener('click', activateScience);
foodBtn.addEventListener('click', activateFood);
ecoBtn.addEventListener('click', activateEco);
energyBtn.addEventListener('click', activateEnergy);
