import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
import "./src/darkMode.js";

import singleDisplay from "./src/singlePage/singleDisplay.js";

const singleProduct = document.querySelector(".single-product");
const url = "https://course-api.com/javascript-store-single-product?";

const searchId = new URLSearchParams(window.location.search).get("id");

const fetchData = async () => {
  singleProduct.innerHTML = `
 <main class="loader">
        <div class="load"></div>
      </main>
`;
  try {
    const response = await fetch(`${url}id=${searchId}`);
    const data = await response.json();
    singleDisplay(data);
  } catch (error) {
    singleProduct.innerHTML = `
<p class='msgDisplay'>Error .....</p>
`;
  }
};

fetchData();
