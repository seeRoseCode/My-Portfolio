import React, { Component } from 'react'
import profile from '../images/photo-collage.jpeg'

class Profile extends Component {

  render(){
    return(
      <div className="container">
        <img className="profile-pic" src={profile} alt="It's My Face!" />
        <div className="overlay">
          <div className="text">I love people, Ruby, and indoor plants.</div>
        </div>
      </div>
    )
  }

}

export default Profile;
