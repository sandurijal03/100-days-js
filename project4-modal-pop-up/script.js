const modal = document.querySelector('.modal');
const button = document.querySelector('#btn');
const close = document.querySelector('.close');

const openModal = (e) => {
  e.preventDefault();
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

button.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
