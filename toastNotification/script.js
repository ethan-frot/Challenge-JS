const button = document.querySelector("button");
const toastContainer = document.querySelector(".toast-container");

button.addEventListener("click", function () {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
      <button class="toast-close-button">X</button>
      <h3>This message is empty</h3>
      <div class="progress-bar"></div>
    `;

  toastContainer.appendChild(toast);

  if (toastContainer.children.length > 5) {
    toastContainer.removeChild(toastContainer.children[0]);
  }

  setTimeout(function () {
    toastContainer.removeChild(toast);
  }, 5000);

  const closeButton = toast.querySelector(".toast-close-button");
  closeButton.addEventListener("click", function () {
    toastContainer.removeChild(toast);
  });

  const progressBar = toast.querySelector(".progress-bar");
  let timeLeft = 5;
  const updateInterval = 1000;

  const updateProgressBar = setInterval(function () {
    timeLeft -= 1;
    const progressPercentage = (timeLeft / 5) * 100;
    progressBar.style.width = progressPercentage + "%";

    if (timeLeft <= 0) {
      clearInterval(updateProgressBar);
    }
  }, updateInterval);
});
