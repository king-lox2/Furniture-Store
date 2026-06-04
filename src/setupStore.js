import { setStorageItems, getStorageItems } from "./utils.js";

let store = getStorageItems("Products");

const setupStore = products => {
    store = products.map(product => {
        

        const { id, title, price, description, image, category } = product;

        return {
            id,
            title,
            price,
            description,
            image,
            category
        };
    });
    setStorageItems("Products", store);
};

const findProduct = id => {
    let products = store.find(product => product.id === id);
    console.log(products)
    return products;
};

export { store, setupStore, findProduct };
