const main = document.querySelector("main");
const title = document.querySelector(".title-container");
const button = document.querySelector("button");
const localStorageKey = "darkMode";

function toggleDarkMode() {
  main.classList.toggle("background-dark-mode");
  title.classList.toggle("title-dark-mode");
  button.classList.toggle("button-dark-mode");

  const isDarkMode = main.classList.contains("background-dark-mode");
  localStorage.setItem(localStorageKey, isDarkMode);
}

const savedDarkMode = localStorage.getItem(localStorageKey);

if (savedDarkMode === "true") {
  main.classList.add("background-dark-mode");
  title.classList.add("title-dark-mode");
  button.classList.add("button-dark-mode");
}

button.addEventListener("click", toggleDarkMode);
