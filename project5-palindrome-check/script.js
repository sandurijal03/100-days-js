let result = document.querySelector('.result');
let btn = document.querySelector('.btn');
// console.log(input.value);

// input.addEventListener('chang');

const palindrom = () => {
  let word = document.querySelector('#input_field').value;
  let lngth = word.length;

  let start = word.substring(0, Math.floor(lngth / 2)).toLowerCase();
  let last = word.substring(lngth - Math.floor(lngth / 2)).toLowerCase();

  let flip = [...last].reverse().join('');

  if (start === flip) {
    result.innerHTML = `${word.toUpperCase()} is palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is not palindrome`;
  }
};

// eee
btn.addEventListener('click', palindrom);
