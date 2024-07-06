import React, { useState } from 'react';
import logo from '../assets/logo.png';

import '../styles/Register.css';

function Register() {
  console.log('Register component rendered');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container-login">
      <div className="login-left">
        <img src={logo} alt="Take Stock Logo" className="login-logo" />
      </div>
      <div className="login-right">
        <div className="wrap-login">
          <form className="login-form">
            <div className="wrap-input">
              <input 
                className={name !== '' ? "has-val input" : "input"}
                type="text" 
                name="name" 
                required 
                value={name}
                onChange={e => setName(e.target.value)} />
              <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={email !== '' ? "has-val input" : "input"}
                type="email" 
                name="email" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={password !== '' ? "has-val input" : "input"}
                type="password" 
                name="password" 
                required 
                value={password}
                onChange={e => setPassword(e.target.value)} />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={confirmPassword !== '' ? "has-val input" : "input"}
                type="password" 
                name="confirmPassword" 
                required 
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
              <span className="focus-input" data-placeholder="Confirmar Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Cadastrar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
