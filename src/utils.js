const allUrl = "https://fakestoreapi.com/products";


const setStorageItems = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const getStorageItems = (item) => {

  let storageProducts = localStorage.getItem(item);
  if (storageProducts) {
    storageProducts = JSON.parse(localStorage.getItem(item));
  } else {
    storageProducts = [];
  }
  return storageProducts;
};

export { allUrl, setStorageItems, getStorageItems };
