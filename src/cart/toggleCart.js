const sidebarCart = document.querySelector(".sidebarCart-container");
const navCart = document.querySelector(".cart-btn");
const btnClear = document.querySelector(".asidecart-btn");

navCart.addEventListener("click", () => {
  sidebarCart.classList.add("show-sidebarCart");
});

btnClear.addEventListener("click", () => {
  sidebarCart.classList.remove("show-sidebarCart");
});

const displayCart = () => {
  sidebarCart.classList.add("show-sidebarCart");
};

export default displayCart;
