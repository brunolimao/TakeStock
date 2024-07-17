import { api } from './api';

export const register = ({ name, email, password }) => (
    api.post('/users/register', { name, email, password })
);

export const login = ({ email, password }) => (
    api.post('/users/login', { email, password })
);

export const logout = () => (
    api.post('/users/logout')
)