import React, { Component } from 'react'
import profile from '../images/photo-collage.jpeg'
import resume from '../images/Resume_Kesha_Lake.pdf'

class Profile extends Component {

  render(){
    return(
        <div className="profile pink">
          <img className="profile-pic" src={profile} alt="It's My Face!" />
          <div className="overlay">
            <div className="text">
              I love people, Ruby, and indoor plants.
              <br/>
              <a href={resume} download>Download My Resume</a>
            </div>
          </div>
      </div>
    )
  }

}

export default Profile;
