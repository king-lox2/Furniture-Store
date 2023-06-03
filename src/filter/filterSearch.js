import { store } from "../setupStore.js";
import displayData from "../displayData.js";

const formContainer = document.querySelector(".form-container");
const searchInput = document.querySelector(".text-input");
const allProducts = document.querySelector(".all-products");

const filterSearch = (store) => {
  formContainer.addEventListener("keyup", () => {
    // this was use to remove styling from our filter buttons anytime we search in our form fields
    const btnn = document.querySelectorAll(".filter-btn");
    if (searchInput) {
      btnn.forEach((bt) => {
        bt.classList.remove("change-btn");
      });
    }
    // styling removal ends here

    const textInput = searchInput.value.toLowerCase();
    if (textInput) {
      const searchStore = store.filter((items) => {
        return items.name.toLowerCase().startsWith(textInput);
      });
      displayData(searchStore, allProducts, true);

      if (searchStore.length < 1) {
        allProducts.innerHTML = `<main class='search-msg'>
    <h3 >Ooops... No product matched your search criteria </h3>
    </main>`;
      }
    } else {
      displayData(store, allProducts, true);
    }
  });
};

export default filterSearch;
