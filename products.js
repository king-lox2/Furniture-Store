import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
import "./src/darkMode.js";

import { allUrl } from "./src/utils.js";
import { store, setupStore } from "./src/setupStore.js";
import displayData from "./src/displayData.js";
import fetchData from "./src/fetchData.js";

import filterBtns from "./src/filter/filterBtns.js";
import filterPrice from "./src/filter/filterPrice.js";
import filterSearch from "./src/filter/filterSearch.js";

const allProducts = document.querySelector(".all-products");

const init = async () => {
  if (store.length < 1) {
    const products = await fetchData(allUrl, allProducts);
    setupStore(products);
  }

  displayData(store, allProducts);
  filterBtns(store);
  filterPrice(store);
  filterSearch(store);
};

init();
