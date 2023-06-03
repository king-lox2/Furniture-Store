import { setStorageItems, getStorageItems } from "./utils.js";

let store = getStorageItems("Products");

const setupStore = (products) => {
  store = products.map((product) => {
    const { id } = product;
    const { company, featured, price, name, colors } = product.fields;
    const { url: img } = product.fields.image[0].thumbnails.large;
    return {
      id,
      company,
      featured,
      price,
      name,
      colors,
      img,
    };
  });
  setStorageItems("Products", store);
};

const findProduct = (id) => {
  let products = store.find((product) => product.id === id);
  return products;
};

export { store, setupStore, findProduct };
