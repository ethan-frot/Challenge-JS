const button = document.querySelector("button");

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

button.addEventListener("click", () => {
  const newColor = randomColor();
  button.style.backgroundColor = newColor;
});
