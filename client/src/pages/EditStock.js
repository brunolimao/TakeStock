import React, { useState } from 'react';

import { MainLayout } from '../layouts/main';

import styles from '../styles/RegisterStock.module.css';

function EditStock() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description, category });
  };

  
  return (
    <MainLayout>
      <form className={styles.wrap_register} onSubmit={handleSubmit}>
        <h2 className={styles.register_title}>Edite seu estoque</h2>
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
        <button type="submit" className={styles.register_btn}>Salvar</button>
      </form>
      </MainLayout>
  );
}

export default EditStock;
