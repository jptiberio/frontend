import React, {useState} from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.png';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    console.log(_id);
  }


  return (
    <div className="container">
      <img src={logo} alt="ET" width="200"/>
      <div className="content">
        {/* <p>Ofereça <strong>naves</strong> para sua tropa e encontre <strong>aliens</strong> em sua jornada</p> */}
        <p>Test first app React react </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="type" 
            name="Enviar" 
            id="email" 
            placeholder="Dominate world"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
