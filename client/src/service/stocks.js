import { api } from './api';

export const getStocks = (userId) => (
    api.get('/stocks/all', { params: { id: userId } })
);

export const getStockById = (id) => (
    api.get('/stocks', { params: { id } })
)

export const createStock = ({ name, description, category }) => (
    api.post('/stocks/create', { name, description, category })
);

export const deleteStock = ({ stockId }) => (
    api.delete('/stocks/delete', { params: { id_stock: stockId } })
);

export const updateStock = (stock) => (
    api.post('/stocks/update', stock)
);

export const getStockMembers = (id) => (
    api.get('/stocks/users', { params: { id } })
);

export const deleteMemberFromStock = ({ userId, stockId }) => (
    api.delete('/stocks/user', { params: { id_stock: stockId, id_user: userId } })
);