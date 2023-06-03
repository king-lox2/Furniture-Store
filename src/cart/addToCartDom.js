const cartGeneral = document.querySelector(".cart-general");

const addToCartDom = (cartProduct) => {
  const { id, price, name, img, amount } = cartProduct;

  const article = document.createElement("article");
  article.classList.add("article-cart");
  article.setAttribute("data-id", id);
  article.innerHTML = `
    <div class="cart-content">
              <div class="cart-img-info">
           <img class="cart-img" src="${img}" alt="" />

                <div class="cart-info">
                  <p class="title">${name}</p>
                  <p class="price"><span>$</span>${price / 100}</p>
                  <button class="delete" data-id="${id}">remove</button>
                </div>
              </div>

              <div class="cart-increase-decrease">
                <button class="decrease" data-id="${id}">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <p class="number-cart" data-id="${id}">${amount}</p>
                <button class="increase" data-id="${id}">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
  
  `;

  cartGeneral.appendChild(article);
};

export default addToCartDom;
