import { api } from './api';

export const getStocks = () => (
    api.get('/stocks/all')
);

export const createStock = ({ name, description, category }) => (
    api.post('/stocks/create', { name, description, category })
);