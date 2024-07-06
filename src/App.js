import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';
import RegiterStock from './components/RegisterStock.js';
import EditStock from './components/EditStock.js';

function App() {
  
  useEffect(() => {
    document.title = "TakeStock";
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/registerstock' element={<RegiterStock />} />
          <Route path="/home" element={<Login />} />
          <Route path="/editStock" element={<EditStock />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
