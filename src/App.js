import React from 'react';
import Profile from './components/Profile'
import NavBar from './components/Navbar'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Tweets from './components/Tweets'
import bckgrnd from './images/rose-background-1.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <table>
        <tr align="center" className="profile-container">
          <Profile />
        </tr>
        <tr>
          <th>TWEETS</th>
        </tr>
        <tr>
          <td><Tweets /></td>
        </tr>
        <tr>
          <th>BLOGS</th>
        </tr>
        <tr>
          <td><Blogs /></td>
        </tr>
        <tr>
          <th>PROJECTS</th>
        </tr>
        <tr>
          <td><Projects /></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
