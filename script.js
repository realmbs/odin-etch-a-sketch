const container = document.querySelector('.container');
// const resetButton = document.querySelector('.reset-button');

const createGridItems = (l, h = 1) => {
  for (let i = 0; i < (l * h); i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    newDiv.style.width = `${100 / l}px`;
    newDiv.style.height = `${100 / h}px`;
    newDiv.style.flex = `0 0 ${100 / l}%`;
    container.appendChild(newDiv);
  }
}

createGridItems(16, 16);