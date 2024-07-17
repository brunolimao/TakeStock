import { api } from "./api";

export const createProduct = ({ name, description, category, amount, price, StockId }) => (
    api.post('/products/create', { name, description, category, number: amount, price, StockId })
);

export const updateProduct = ({ name, description, category, amount, price, id }) => (
    api.post('/products/update', { name, description, category, number: amount, price, id })
);

export const deleteProduct = (id) => (
    api.delete('/products/delete', { params: { id_product: id } })
);