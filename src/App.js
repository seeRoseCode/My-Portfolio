import React from 'react';
import Profile from './components/profile'
import NavBar from './components/navbar'
import Projects from './components/projects'
import Blogs from './components/blogs'
import bckgrnd from './images/rose-background-1.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <table>
        <tr>
          <td><Profile /></td>

        </tr>
        <tr>
          <th>
            <div class="heading">
              BLOGS
            </div>
          </th>
          <th>
            <div class="heading">
              PROJECTS
            </div>
          </th>
        </tr>
        <tr>
          <td>
          <Blogs />
          </td>
          <td>
            <Projects />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
