import addToCart from "./cart/setupCart.js";

const displayData = (items, element, filters) => {
    const displayInfo = items
        .map(item => {
            const { id, title, price, description, image, category } = item;
            return `
           <article>
          <a href="./singleProduct.html?id=${id}" >
            <img src="${image}" alt="${title}" class="featured-img" />
            </a>
            <div class="featured-content">
              <p class="featured-title">${title}</p>
              <p class="featured-price">$${price}</p>
              <button class="add-cart" data-id=${id}>Add to cart</button>
            </div>
          </article>
           
    `;
        })
        .join("");

    element.innerHTML = `
   <div class="f-products"> 
   ${displayInfo}
   </div>
  `;
    if (filters) {
        return;
    }
    element.addEventListener("click", e => {
        let btnId = e.target;
        if (btnId.classList.contains("add-cart")) {
            btnId = e.target.dataset.id;
            addToCart(btnId);
        }
    });
};

export default displayData;
