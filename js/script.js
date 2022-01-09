const body = document.querySelector('body');
const button = document.querySelector('.color-btn');
const colorSpan = document.querySelector('.color');

const colorArr = ['green', 'red', '#F15025', 'Rgba(133,122,200)', '#b01b60'];

window.addEventListener('DOMContentLoaded', getRandomColor);
button.addEventListener('click', getRandomColor);

function getRandomColor() {
  const randomNumber = Math.floor(Math.random() * colorArr.length);
  colorSpan.textContent = colorArr[randomNumber];
  body.style.backgroundColor = colorArr[randomNumber];
}
