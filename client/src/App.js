import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import RegiterStock from './pages/RegisterStock.js';
import EditStock from './pages/EditStock.js';
import ViewStock from './pages/ViewStock.js';
import Profile from './pages/Profile.js';

import "./index.css";
import ViewProducts from './pages/ViewProducts.js';
import { Members } from './pages/Members.js';

import { AuthProvider } from './contexts/AuthContext.js';

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/perfil" element={<Profile/>}/>
            
            <Route path="/home" element={<Login />} />
            <Route path="/" element={<Login />} />
            
            <Route path='/estoque/cadastro' element={<RegiterStock />} />
            <Route path="/estoque/editar/:stockId" element={<EditStock />} />
            <Route path="/estoque/visualizar" element={<ViewStock />} />

            <Route path="/estoque/:stockId" element={<ViewProducts />} />

            <Route path="/estoque/:stockId/membros" element={<Members />} />
          </Routes>
        </Router>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
