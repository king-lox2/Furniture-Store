import addToCart from "../cart/setupCart.js";

const singleProduct = document.querySelector(".single-product");

const singleDisplay = (items) => {
  const { id } = items;
  const { name, price, company, description } = items.fields;
  const costPrice = price / 100;
  const { url: img } = items.fields.image[0];
  document.title = name.toUpperCase();
  const arrayColor = items.fields.colors;

  const displayColor = arrayColor
    .map((colorss) => {
      return `
     <i class='fa-solid fa-circle' style="color:${colorss}"></i>
     `;
    })
    .join("");

  singleProduct.innerHTML = `
    <div class="single-content">
      <img src="${img}" alt="${name}" />

      <div class="single-details">
        <p class="single-name"><span class='lie'>Name :</span> ${name}</p>
        <p class="single-price">
          <span><span class='lie'>Price :</span> $</span>${costPrice}
        </p>
        <p class="single-company"><span class='lie'>Company :</span> ${company}</p>
        <p  class="single-color">
        <span class='lie'>Color :</span> ${displayColor}
        </p>
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
