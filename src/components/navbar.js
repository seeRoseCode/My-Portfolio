import React, { Component } from 'react'
import logo from '../images/logo.png'

function NavBar(){
  return(
    <div className="navbar">
    <img className="logo" src={logo} />
    {
      // <ul>
      //   <li>hi</li>
      //   <li>hola</li>
      //   <li>jambo</li>
      //   <li>bonjour</li>
      //   <li>wha happenin budday</li>
      // </ul>
    }

    </div>
  )
}

export default NavBar;
