const container = document.querySelector('.container');

for (let i = 0; i <= 32; i++) {
  const newDiv = document.createElement('div');
  newDiv.style.width = '100px';
  newDiv.style.height = '100px';
  newDiv.style.border = '1px solid black';
  container.appendChild(newDiv);
}