const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset--button');
const startButton = document.querySelector('.start--button');

// reset to initial conditions
resetButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  const inputWidth = document.querySelector('.width--input');
  const inputHeight = document.querySelector('.height--input');
  gridItems.forEach(i => {
    i.style.backgroundColor = 'rebeccapurple';
  });
  inputWidth.value = 'Enter width';
  inputHeight.value = 'Enter height';
})

// get width + height from input, call createGridItems, redirect if > 100
startButton.addEventListener('click', () => {
  const inputWidth = Number(prompt('Enter width'));
  const inputHeight = Number(prompt('Enter height'));
  if (inputWidth < 100 && inputHeight < 100) {
    createGridItems(inputWidth, inputHeight);
  } else if (inputWidth >= 100 || inputHeight >= 100) {
    alert('Please enter a number less than 100');
  }
})

addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('grid-item')) {
    e.target.style.backgroundColor = 'limegreen';
  }
})

const createGridItems = (w, h = 1) => {
  for (let i = 0; i < (w * h); i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    newDiv.style.width = `${100 / w}px`;
    newDiv.style.height = `${100 / h}px`;
    container.appendChild(newDiv);
  }
}