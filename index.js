const popUp = document.getElementById("popup-window");
const btn = document.getElementById("btn");
const close = document.getElementById("close");
const mainContent = document.querySelector(".content");

btn.addEventListener("click", () => {
  popUp.style.display = "flex";
  mainContent.classList.add("blur-effect");
});

close.addEventListener("click", () => {
  popUp.style.display = "none";
  mainContent.classList.remove("blur-effect");
});