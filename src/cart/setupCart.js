import displayCart from "./toggleCart.js";
import { getStorageItems, setStorageItems } from "../utils.js";
import { findProduct } from "../setupStore.js";
import addToCartDom from "./addToCartDom.js";

const numberCart = document.querySelector(".total-number");
const amountTotal = document.querySelector(".amount-total");
const productCart = document.querySelector(".cart-general");

let cart = getStorageItems("cart");

/*const addToCart = id => {
    
    let item = cart.find(cartItem => cartItem.id === id);

    if (!item) {
        let product = findProduct(id);

        if (!product) return;
        // adding items to cart
        product = { ...product, amount: 1 };

        // ...cart was used to avoid displaying same product twice
        cart = [...cart, product];
        // adding item to cart DOM
        addToCartDom(product);
    } else {
        const updateAmount = increaseAmount(id);
        const items = [...productCart.querySelectorAll(".number-cart")];
        const newAmount = items.find(item => {
            return item.dataset.id === id;
        });
        newAmount.textContent = updateAmount;
    }

    // we want these fuctions below to run regardless if the item is in our cart or not

    // calculating the number of items in our cart
    cartNumberOfItems();
    // calculating the total cost items in our cart
    cartTotalAmount();
    // adding our cart items to local storage
    setStorageItems("cart", cart);
    // this displays the cart section anytime we add to cart
    displayCart();
};
*/
const addToCart = id => {
  id = Number(id);

  let item = cart.find(cartItem => cartItem.id === id);

  if (!item) {
    let product = findProduct(id);
    if (!product) return;

    product = { ...product, amount: 1 };

    cart = [...cart, product];

    addToCartDom(product);
  } else {
    increaseAmount(id);

    const items = [...productCart.querySelectorAll(".number-cart")];
    const target = items.find(el => Number(el.dataset.id) === id);

    if (target) {
      target.textContent = item.amount + 1;
    }
  }

  cartNumberOfItems();
  cartTotalAmount();
  setStorageItems("cart", cart);
  displayCart();
};



function cartNumberOfItems() {
    const cartNumber = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount);
    }, 0);
    numberCart.textContent = cartNumber;
}

function cartTotalAmount() {
    const amount = cart
        .reduce((total, cartItem) => {
            const price = Number(cartItem.price) || 0;
            return total + price * cartItem.amount;
        }, 0)
        .toFixed(2);
    amountTotal.textContent = amount;
}

function displayCartInfo() {
    cart.map(cartInfo => {
        addToCartDom(cartInfo);
    });
}


function increaseAmount(id) {
  id = Number(id);

  let newAmount;

  cart = cart.map(cartItem => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });

  return newAmount;
}

function decreaseAmount(id) {
  id = Number(id);

  let newAmount = 0;

  cart = cart
    .map(cartItem => {
      if (cartItem.id === id) {
        newAmount = cartItem.amount - 1;

        return {
          ...cartItem,
          amount: newAmount
        };
      }
      return cartItem;
    })
    .filter(cartItem => cartItem.amount > 0); // 👈 remove item if < 1

  return newAmount;
}

function removeId(id) {
  id = Number(id);

  cart = cart.filter(cartItem => cartItem.id !== id);
}

function removeIncreaseDecrease() {
  productCart.addEventListener("click", e => {
    const element = e.target;
    const parent = e.target.parentElement;

    const elementId = Number(element.dataset.id);
    const parentId = Number(parent.dataset.id);

    // remove items
    if (element.classList.contains("delete")) {
      removeId(elementId);

      element.parentElement.parentElement.parentElement.parentElement.remove();
    }

    // increase items
    if (parent.classList.contains("increase")) {
      const increaseItemAmount = increaseAmount(parentId);
      parent.previousElementSibling.textContent = increaseItemAmount;
    }

    // decrease items
    if (parent.classList.contains("decrease")) {
      const decreaseItemAmount = decreaseAmount(parentId);

      if (decreaseItemAmount === 0) {
        removeId(parentId);

        parent.parentElement.parentElement.parentElement.remove();
      } else {
        parent.nextElementSibling.textContent = decreaseItemAmount;
      }
    }

    cartNumberOfItems();
    cartTotalAmount();
    setStorageItems("cart", cart);
  });
}

const init = () => {
    // calculating the number of items in our cart
    cartNumberOfItems();
    // calculating the total cost items in our cart
    cartTotalAmount();
    // display information in our sidebar cart
    displayCartInfo();
    // remove,increases and decreases items
    removeIncreaseDecrease();
};

init();

export default addToCart;
