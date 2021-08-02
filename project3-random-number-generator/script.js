let number = document.querySelector('.number');
let btn = document.querySelector('.generate');

const generateNumber = () => {
  const randomColor = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomColor;
};

btn.addEventListener('click', generateNumber);

generateNumber();
