import React from 'react';
import logo from '../assets/logo.png';

import '../styles/Login.css';

import { useState } from 'react';

function Login() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');


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
              className={email !=='' ? "has-val input" : "input"}
              type="email" 
              name="email" required 
              value={email}
              onChange={e => setEmail(e.target.value)}/>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
              className={password !=='' ? "has-val input" : "input"}
              type="password"
              name="password" required 
              value={password}
              onChange={e => setPassword(e.target.value)}/>
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Novo aqui?</span>
              <a className="txt2" href="/register">Cadastre-se</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
