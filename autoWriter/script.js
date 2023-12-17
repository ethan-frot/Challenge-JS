const h3 = document.querySelector("h3");
const button = document.querySelector("button");

const words = "Le JavaScript c'est trop bien";
const wordsToArray = words.split("");

let index = 0;
let intervalId;

function autoWriting() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    if (index < wordsToArray.length) {
      h3.append(wordsToArray[index]);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 150);
}

function toggleAnimation() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    autoWriting();
  }
}

autoWriting();

setInterval(() => {
  h3.textContent = "";
  autoWriting();
  index = 0;
}, 9000);

button.addEventListener("click", toggleAnimation);
