import displayData from "../displayData.js";

const filterBtns = (store) => {
  const filterButtons = document.querySelector(".filter-btn-container");
  const searchInput = document.querySelector(".text-input");

  const companies = () => {
    const filterSet = ["All", ...new Set(store.map((items) => items.company))];

    const displayCompanies = filterSet
      .map((items) => {
        return `<button class="filter-btn" data-id=${items}>${items}</button>`;
      })
      .join("");
    filterButtons.innerHTML = displayCompanies;
  };

  companies();

  const allProducts = document.querySelector(".all-products");

  filterButtons.addEventListener("click", (e) => {
    // this was use to add styling anytime we click on a button of a specific company
    const btnn = document.querySelectorAll(".filter-btn");
    const btnId = e.target.dataset.id;
    if (btnId) {
      btnn.forEach((bt) => {
        bt.classList.remove("change-btn");
        e.target.classList.add("change-btn");
      });
    }
    // the styling ends here

    const btn = e.target;

    if (btn.classList.contains("filter-btn")) {
      if (btn.dataset.id === "All") {
        displayData(store, allProducts, true);
      } else {
        let storeProducts = store.filter(
          (items) => items.company === btn.dataset.id
        );
        displayData(storeProducts, allProducts, true);
      }
    }
    searchInput.value = "";
  });
};

export default filterBtns;
