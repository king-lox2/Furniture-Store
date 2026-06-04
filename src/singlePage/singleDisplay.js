import addToCart from "../cart/setupCart.js";

const singleProduct = document.querySelector(".single-product");

const singleDisplay = (items) => {
  const { id, title, price, description, image, category  } = items;

  document.title = title.toUpperCase();

  singleProduct.innerHTML = `
    <div class="single-content">
      <img src="${image}" alt="${title}" />

      <div class="single-details">
        <p class="single-name"><span class='lie'>Name :</span> ${title}</p>
        <p class="single-price">
          <span><span class='lie'>Price :</span> $</span>${price}
        </p>
        <p class="single-company"><span class='lie'>Category :</span> ${category}</p>
        
        <p class="single-quote"><span class='lie'>Description :</span> ${description}</p>
         <button class="add-cart" data-id=${id}>Add to cart</button>
      </div>
    </div>
  `;

  singleProduct.addEventListener("click", (e) => {
    let btnId = e.target;
    if (btnId.classList.contains("add-cart")) {
      btnId = e.target.dataset.id;
      addToCart(btnId);
    }
  });
};

export default singleDisplay;
