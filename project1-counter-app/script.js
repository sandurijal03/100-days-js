const title = document.querySelector('.title');
const count = document.querySelector('.count');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
const increment = document.querySelector('.increment');
const buttonContainer = document.querySelector('.btn-container');

let counting = 0;

title.innerHTML = 'counter app';
count.innerHTML = counting;

decrement.style.backgroundColor = '#db6400';
increment.style.backgroundColor = '#012c01';
reset.style.color = '#000';

buttonContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('decrement')) {
    count.innerHTML = counting--;
    setColor();
  }

  if (e.target.classList.contains('reset')) {
    counting = 0;
    count.innerHTML = counting;
    setColor();
  }

  if (e.target.classList.contains('increment')) {
    count.innerHTML = counting++;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = 'yellow';
  } else if (count.innerHTML < 0) {
    count.style.color = 'orangered';
  } else {
    count.style.color = '#fff';
  }
}

// decrement.addEventListener('click', () => {
//   count.innerHTML = counting--;
//   setColor();
// });

// reset.addEventListener('click', () => {
//   counting = 0;
//   count.innerHTML = counting;
//   setColor();
// });

// increment.addEventListener('click', () => {
//   count.innerHTML = ++counting;
//   setColor();
// });
