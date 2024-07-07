import React, { useState } from 'react';
import logo from '../assets/logo.png';

import styles from '../styles/Register.module.css';

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className={styles.container_login}>
      <div className={styles.login_left}>
        <img src={logo} alt="Take Stock Logo" className={styles.login_logo} />
      </div>
      <div className={styles.login_right}>
        <div className={styles.wrap_login}>
          <form className={styles.login_form}>
            <div className={styles.wrap_input}>
              <input 
                className={name !== '' ? `${styles.has_val} ${styles.input}` : styles.input}
                type="text" 
                name="name" 
                required 
                value={name}
                onChange={e => setName(e.target.value)} />
              <span className={styles.focus_input} data-placeholder="Nome"></span>
            </div>

            <div className={styles.wrap_input}>
              <input 
                className={email !== '' ? `${styles.has_val} ${styles.input}` : styles.input}
                type="email" 
                name="email" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <span className={styles.focus_input} data-placeholder="Email"></span>
            </div>

            <div className={styles.wrap_input}>
              <input 
                className={password !== '' ? `${styles.has_val} ${styles.input}` : styles.input}
                type="password" 
                name="password" 
                required 
                value={password}
                onChange={e => setPassword(e.target.value)} />
              <span className={styles.focus_input} data-placeholder="Senha"></span>
            </div>

            <div className={styles.wrap_input}>
              <input 
                className={confirmPassword !== '' ? `${styles.has_val} ${styles.input}` : styles.input}
                type="password" 
                name="confirmPassword" 
                required 
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
              <span className={styles.focus_input} data-placeholder="Confirmar Senha"></span>
            </div>

            <div className={styles.container_login_form_btn}>
              <button className={styles.login_form_btn}>Cadastrar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
