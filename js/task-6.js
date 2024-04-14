function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector(`button[data-create]`);
const handleClick = () => {
  const numberInput = document.querySelector("input")
  
    if (numberInput.value < 1 || numberInput.value > 100) {
      return 
    }
  
  const divBoxes = document.querySelector("#boxes");
  divBoxes.innerHTML = "";
    
for (let index = 0; index < numberInput.value; index++) {
    const newBox = document.createElement("li");
    newBox.classList.add("box");
  newBox.style.backgroundColor = getRandomHexColor();
  newBox.style.height = `${30 + index * 10}px`;
  newBox.style.width = `${30 + index * 10}px`;
  divBoxes.append(newBox);
  
}
  numberInput.value = ""
};

btnCreate.addEventListener("click", handleClick);


const btnDestroy = document.querySelector('button[data-destroy]');
const handleDestroyBtnClick = () => {
  const divBoxes = document.querySelector("#boxes");
  divBoxes.innerHTML = "";
}
btnDestroy.addEventListener("click", handleDestroyBtnClick);