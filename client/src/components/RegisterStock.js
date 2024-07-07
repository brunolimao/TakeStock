import React, { useState } from 'react';


import styles from '../styles/RegisterStock.module.css';
import takeStockLogo from '../assets/logo.png';
import profileIcon from '../assets/ProfileIcon.png';
import infoIcon from '../assets/InfoIcon.png';
import stockIcon from '../assets/StockIcon.png';



function RegisterStock() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description, category });
  };

  
  return (
    <div className={styles.container_register}>
      <div className={styles.sidebar}>
      <div className={styles.sidebar_top}>
        <img src={takeStockLogo} alt="Take Stock Logo" className={styles.logo} />
        <a href="#stocks" className={styles.menu_item}>
          <img src={stockIcon} alt="Stocks" className={styles.icon} />
          <span>Meus estoques</span>
        </a>
      </div>
      <div className={styles.sidebar_middle}>
      </div>
      <div className={styles.sidebar_footer}>
        <div className={styles.separator}></div>
        <a href="#profile" className={styles.menu_item}>
          <img src={profileIcon} alt="Profile" className={styles.icon} />
          <span>Perfil</span>
        </a>
        <a href="#help" className={styles.menu_item}>
          <img src={infoIcon} alt="Help" className={styles.icon} />
          <span>Ajuda</span>
        </a>
      </div>
    </div>


      <form className={styles.wrap_register} onSubmit={handleSubmit}>
        <h2 className={styles.register_title}>Cadastre seu estoque</h2>
        <input 
          type="text" 
          className={styles.input_field} 
          placeholder="Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          className={styles.input_field} 
          placeholder="Descrição" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          className={styles.input_field} 
          placeholder="Categoria" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required 
        />
        <button type="submit" className={styles.register_btn}>Cadastrar</button>
      </form>
    </div>
  );
}

export default RegisterStock;
