import React from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config.json';

function App() {
  const API_KEY = config.API_KEYS;
  

  return (
    <div className="App">
      <header className="App-header">
        {API_KEY}

      </header>
    </div>
  );
}

export default App;
