import React, { Component } from 'react'
import profile from '../images/photo-collage.jpeg'
import resume from '../images/Resume_Kesha_Lake.pdf'

function Profile(){

    return(
      <div className="profile">
        <img className="profile-pic" src={profile} alt="It's My Face!" />
        <div className="overlay">
          <div className="text">
          I love people, Ruby, and indoor plants.
          <br/>
          <a href={resume} download>
          Resume Download
          </a>
          </div>
        </div>
      </div>
    )
  

}

export default Profile;
