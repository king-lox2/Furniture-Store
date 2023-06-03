import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
import "./src/darkMode.js";

import { allUrl } from "./src/utils.js";
import fetchData from "./src/fetchData.js";
import { setupStore, store } from "./src/setupStore.js";
import displayData from "./src/displayData.js";

const featuredElement = document.querySelector(".featured-products");

const productsF = document.querySelector(".featured-products");

const showData = async () => {
  const productInfo = await fetchData(allUrl, productsF);
  if (productInfo) {
    setupStore(productInfo);
    const featuredProduct = store.filter((items) => {
      return items.featured === true;
    });
    displayData(featuredProduct, featuredElement);
  }
};

window.addEventListener("DOMContentLoaded", showData);
