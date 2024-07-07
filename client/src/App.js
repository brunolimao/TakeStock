import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import RegiterStock from './components/RegisterStock.js';
import EditStock from './components/EditStock.js';

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
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
