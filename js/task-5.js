function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const handleClick = () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor()
  const spanText = document.querySelector(".color")
  spanText.textContent = body.style.backgroundColor
};

button.addEventListener("click", handleClick);