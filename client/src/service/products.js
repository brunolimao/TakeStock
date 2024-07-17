import { api } from "./api";

export const createProduct = ({ name, description, category, amount, price, stockId }) => (
    api.post('/products/create', { name, description, category, number: amount, price, stockId })
);

export const updateProduct = ({ name, description, category, amount, price, stockId, id }) => (
    api.post('/products/update', { name, description, category, number: amount, price, stockId, id })
);

export const deleteProduct = (id) => (
    api.delete('/products/delete', { id_product: id })
);