import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="ET" width="200"/>
      <div className="content">
        <p>Ofereça <strong>aliens</strong> para terráqueos e encontre <strong>naves</strong> para sua tropa</p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="type" 
            name="Enviar" 
            id="email" 
            placeholder="Vem que vamo"
          />
          <button>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
