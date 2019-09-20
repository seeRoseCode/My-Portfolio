import React from 'react';
import Profile from './components/profile'
import bckgrnd from './images/rose-background-1.jpg';
import logo from './images/logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <img className="logo" src={logo} />
      </div>
      <Profile />

    </div>
  );
}

export default App;
