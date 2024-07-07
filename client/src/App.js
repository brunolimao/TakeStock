import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import RegiterStock from './pages/RegisterStock.js';
import EditStock from './pages/EditStock.js';
import ViewStock from './pages/ViewStock.js';

import "./index.css";

function App() {
  
  useEffect(() => {
    document.title = "TakeStock";
  }, []);

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
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
