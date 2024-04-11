const menuButton = document.querySelector(".bx-menu");
const xButton = document.querySelector(".bx-x");
const sidebar = document.querySelector(".side-bar");

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

xButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
})