import React, { useState, useEffect } from 'react';

import { MainLayout } from '../layouts/main';

import styles from '../styles/RegisterStock.module.css';

import { getStockById, updateStock } from '../service/stocks';
import { useNavigate, useParams } from 'react-router-dom';

function EditStock() {

  const { stockId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await updateStock({ name, description, category, id: stockId });
      navigate(`/estoque/${stockId}`);
    } catch {
      alert('Erro ao editar estoque.');
    }
  };

  useEffect(() => {
    
    getStockById(stockId).then((res) => {
      setName(res.data.stock.name);
      setDescription(res.data.stock.description);
      setCategory(res.data.stock.category);
    }).catch((err) => console.log(err));

  }, [stockId]);

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
