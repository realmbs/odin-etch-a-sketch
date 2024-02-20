const container = document.querySelector('.container');
// const resetButton = document.querySelector('.reset-button');

const createGridItems = (l, h = 1) => {
  for (let i = 0; i < (l * h); i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    container.appendChild(newDiv);
  }
}

createGridItems(16);