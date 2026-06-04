const sidebarContainer = document.querySelector(".sidebar-container");
const navBtn = document.querySelector(".nav-btn");
const sidebarBtn = document.querySelector(".aside-btn");

navBtn.addEventListener("click", () => {
  sidebarContainer.classList.add("show-sidebar");
});

sidebarBtn.addEventListener("click", () => {
  sidebarContainer.classList.remove("show-sidebar");
});
