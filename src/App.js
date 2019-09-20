import React from 'react';
import Profile from './components/profile'
import bckgrnd from './images/rose-background-1.jpg';
import logo from './images/logo.png'
import profile from './images/photo-collage.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <img className="logo" src={logo} />
      </div>
      <div className="wrapper">
        <div className="one">
          <Profile />
        </div>
      </div>

    </div>
  );
}

export default App;
