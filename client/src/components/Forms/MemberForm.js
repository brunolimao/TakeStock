import { useState } from 'react';
import styles from './styles.module.css';
import { Button } from '../Button';

export const MemberForm = function({ action }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        action({
            name, email, isAdmin,
        });
    }

    return (
        <form className={styles.content} onSubmit={submit}>
            <div className={styles.input}>
                <label>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
            </div>

            <div className={styles.input}>
                <label>E-mail</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            </div>

            <div className={styles.checkbox_input}>
                <input type="checkbox" value={isAdmin} onChange={(e) => setIsAdmin(e.target.value)} />
                <label>É administrador?</label>
            </div>

            <Button>
                Enviar
            </Button>
        </form>
    );
};