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

const findProduct = (id) => {
    const product = store.find(product => Number(product.id) === Number(id));
    
    console.log("Searching ID:", id);
    console.log("Found product:", product);

    return product;
};

export { store, setupStore, findProduct };
