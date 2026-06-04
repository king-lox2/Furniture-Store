import displayData from "../displayData.js";

const allProducts = document.querySelector(".all-products");
const priceInput = document.querySelector(".price-input");
const priceRange = document.querySelector(".price-digit");
const searchInput = document.querySelector(".text-input");

const filterPrice = store => {
    const displayPrice = () => {
        let maxPrice = store.map(items => items.price);

        let minPrice = store.map(items => items.price);
        minPrice = Math.min(...minPrice);

        maxPrice = Math.max(...maxPrice);
        priceInput.value = minPrice;
        priceInput.max = maxPrice;
        priceInput.min = minPrice;
        priceRange.textContent = `Value : $${minPrice}`;
    };
    displayPrice();

    priceInput.addEventListener("input", () => {
        // this was use to remove styling from our filter buttons anytime we change our price range value
        const btnn = document.querySelectorAll(".filter-btn");
        if (searchInput) {
            btnn.forEach(bt => {
                bt.classList.remove("change-btn");
            });
        }
        // styling removal ends here

        const priceInfo = parseInt(priceInput.value);
        priceRange.textContent = `Value : $${priceInfo}`;

        const productPrice = store.filter(items => {
            return items.price <= priceInfo;
        });
        displayData(productPrice, allProducts, true);
        if (productPrice.length < 1) {
            allProducts.innerHTML = `<main class='search-msg'>
    <h3 >Sorry... No product is worth less than $${priceInfo}</h3>
    </main>`;
        }
        searchInput.value = "";
    });
};

export default filterPrice;
