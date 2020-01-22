import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="ET" width="200"/>
      <div className="content">
        <p>Ofereça <strong>naves</strong> para sua tropa e encontre <strong>alies</strong> para em sua jornada</p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="type" 
            name="Enviar" 
            id="email" 
            placeholder="Partiu dominar o espaço"
          />
          <button className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
