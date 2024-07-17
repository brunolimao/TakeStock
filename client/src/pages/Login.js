import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

import styles from '../styles/Login.module.css';

import { useState } from 'react';

import { login } from '../service/auth';

function Login() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    navigate('/estoque/visualizar');
  };

  return (
    <div className={styles.container_login}>
      <div className={styles.login_left}>
        <img src={logo} alt="Take Stock Logo" className={styles.login_logo} />
      </div>
      <div className={styles.login_right}>
        <div className={styles.wrap_login}>
          <form className={styles.login_form} onSubmit={submit}>

            <div className={styles.wrap_input}>
              <input 
              className={email !== '' ? `${styles.has_val} ${styles.input}` : styles.input}
              type="email" 
              name="email" 
              required 
              value={email}
              onChange={e => setEmail(e.target.value)}/>
              <span className={styles.focus_input} data-placeholder="Email"></span>
            </div>

            <div className={styles.wrap_input}>
              <input
              className={password !=='' ? `${styles.has_val} ${styles.input}` : styles.input}
              type="password"
              name="password" required 
              value={password}
              onChange={e => setPassword(e.target.value)}/>
              <span className={styles.focus_input} data-placeholder="Senha"></span>
            </div>

            <div className={styles.container_login_form_btn}>
              <button type="submit" className={styles.login_form_btn}>Login</button>
            </div>

            <div className={styles.text_center}>
              <span className={styles.txt1}>Novo aqui?</span>
              <a className={styles.txt2} href="/cadastro">Cadastre-se</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
