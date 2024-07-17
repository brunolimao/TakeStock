import { useState } from 'react';
import styles from './styles.module.css';
import { Button } from '../Button';

export const ProductForm = function({ action, defaultValues = {} }) {

    const [name, setName] = useState(defaultValues.name || '');
    const [description, setDescription] = useState(defaultValues.description || '');
    const [category, setCategory] = useState(defaultValues.category || '');
    const [amount, setAmount] = useState(defaultValues.amount || '');
    const [price, setPrice] = useState(defaultValues.price || '');

    const submit = (e) => {
        e.preventDefault();

        action({
            name, description, category, amount, price,
        });
    }

    return (
        <form className={styles.content} onSubmit={submit}>
            <div className={styles.input}>
                <label>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            </div>

            <div className={styles.input}>
                <label>Descrição</label>
                <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
            </div>

            <div className={styles.input}>
                <label>Categoria</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categoria" />
            </div>

            <div className={styles.horizontal}>
                <div className={styles.input}>
                    <label>Quantidade</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Quantidade" />
                </div>

                <div className={styles.input}>
                    <label>Preço</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" />
                </div>
            </div>

            <Button>
                Enviar
            </Button>
        </form>
    );
};