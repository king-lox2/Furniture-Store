const cartGeneral = document.querySelector(".cart-general");

const addToCartDom = (cartProduct) => {
  const { id, price, title, image, amount } = cartProduct;
 const numericId = Number(id);

  const article = document.createElement("article");
  article.classList.add("article-cart");
  article.setAttribute("data-id", id);
  article.innerHTML = `
    <div class="cart-content">
              <div class="cart-img-info">
           <img class="cart-img" src="${image}" alt="" />

                <div class="cart-info">
                  <p class="title">${title}</p>
                  <p class="price"><span>$</span>${price}</p>
                  <button class="delete" data-id="${numericId}">remove</button>
                </div>
              </div>

              <div class="cart-increase-decrease">
                <button class="decrease" data-id="${numericId}">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <p class="number-cart" data-id="${numericId}">${amount}</p>
                <button class="increase" data-id="${numericId}">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
  
  `;

  cartGeneral.appendChild(article);
};

export default addToCartDom;
