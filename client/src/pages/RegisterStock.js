import React, { useState } from 'react';
import axios from "axios";
import styles from '../styles/RegisterStock.module.css';
import { MainLayout } from '../layouts/main';
import { useNavigate } from "react-router-dom";

function RegisterStock() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/stocks/create',
        {
          name: name,
          description: description,
          category: category,
        },
        {withCredentials: true,
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
      },)
      navigate("/estoque/visualizar")
    } catch (error) {
      alert(error.response.data.error)
    }
  }
  
  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default RegisterStock;
