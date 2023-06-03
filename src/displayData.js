import addToCart from "./cart/setupCart.js";

const displayData = (items, element, filters) => {
  const displayInfo = items
    .map((item) => {
      const { id, img, name, price } = item;
      return `
           <article>
          <a href="./singleProduct.html?id=${id}" >
            <img src="${img}" alt="${name}" class="featured-img" />
            </a>
            <div class="featured-content">
              <p class="featured-title">${name}</p>
              <p class="featured-price">$${price / 100}</p>
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
  element.addEventListener("click", (e) => {
    let btnId = e.target;
    if (btnId.classList.contains("add-cart")) {
      btnId = e.target.dataset.id;
      addToCart(btnId);
    }
  });
};

export default displayData;
