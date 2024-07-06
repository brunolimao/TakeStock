import React, { useState } from 'react';


import '../styles/RegisterStock.css';
import takeStockLogo from '../assets/logo.png';
import profileIcon from '../assets/ProfileIcon.png';
import infoIcon from '../assets/InfoIcon.png';
import stockIcon from '../assets/StockIcon.png';



function EditStock() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description, category });
  };

  
  return (
    <div className="container-register">
      <div className="sidebar">
      <div className="sidebar-top">
        <img src={takeStockLogo} alt="Take Stock Logo" className="logo" />
        <a href="#stocks" className="menu-item">
          <img src={stockIcon} alt="Stocks" className="icon" />
          <span>Meus estoques</span>
        </a>
      </div>
      <div className="sidebar-middle">
      </div>
      <div className="sidebar-footer">
        <div className="separator"></div>
        <a href="#profile" className="menu-item">
          <img src={profileIcon} alt="Profile" className="icon" />
          <span>Perfil</span>
        </a>
        <a href="#help" className="menu-item">
          <img src={infoIcon} alt="Help" className="icon" />
          <span>Ajuda</span>
        </a>
      </div>
    </div>


      <form className="wrap-register" onSubmit={handleSubmit}>
        <h2 className="register-title">Edite seu estoque</h2>
        <input 
          type="text" 
          className="input-field" 
          placeholder="Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          className="input-field" 
          placeholder="Descrição" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          className="input-field" 
          placeholder="Categoria" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />
        <button type="submit" className="register-btn">Salvar</button>
      </form>
    </div>
  );
}

export default EditStock;
