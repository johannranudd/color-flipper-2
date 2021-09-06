const body = document.querySelector('body');
const button = document.querySelector('.color-btn');
const colorSpan = document.querySelector('.color');

const colorArr = [
    'red',
    'lightblue',
    'green',
    'pink',
    'purple',
]
window.addEventListener("DOMContentLoaded", getRandomColor)
button.addEventListener("click", getRandomColor)

function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * colorArr.length);
    colorSpan.textContent = colorArr[randomNumber];
    body.style.backgroundColor = colorArr[randomNumber];
}