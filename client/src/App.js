import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import RegiterStock from './pages/RegisterStock.js';
import EditStock from './pages/EditStock.js';
import ViewStock from './pages/ViewStock.js';

import "./index.css";
import ViewProducts from './pages/ViewProducts.js';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/home" element={<Login />} />
          <Route path="/" element={<Login />} />
          
          <Route path='/estoque/cadastro' element={<RegiterStock />} />
          <Route path="/estoque/editar" element={<EditStock />} />
          <Route path="/estoque/visualizar" element={<ViewStock />} />

          <Route path="/produtos/visualizar" element={<ViewProducts />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
