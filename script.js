const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset--button');
const startButton = document.querySelector('.start--button');

// reset to initial conditions
resetButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(i => i.remove());
})

// get width + height from input, call createGridItems, redirect if > 100
startButton.addEventListener('click', () => {
  const inputWidth = Number(prompt('Enter width'));
  const inputHeight = Number(prompt('Enter height'));
  if (inputWidth <= 100 && inputHeight <= 100) {
    createGridItems(inputWidth, inputHeight);
  } else if (inputWidth > 100 || inputHeight > 100) {
    alert('Please enter a number less than 100');
  } else if (inputWidth <= 0 || inputHeight <= 0) {
    alert('Please enter a number greater than 0');
  } else {
    alert('Please enter a valid number');
  }
})

addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('grid-item')) {
    e.target.style.backgroundColor = 'black';
    e.target.style.border = '1px solid black';
  }
})

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const createGridItems = (w, h = 1) => {
  for (let i = 0; i < (w * h); i++) {
    const newDiv = document.createElement('div');
    const randomColor = generateRandomColor();
    newDiv.style.backgroundColor = randomColor;
    newDiv.style.border = `1px solid ${randomColor}`;
    newDiv.classList.add('grid-item');
    newDiv.style.width = `${100 / w}px`;
    newDiv.style.height = `${100 / h}px`;
    container.appendChild(newDiv);
  }
}