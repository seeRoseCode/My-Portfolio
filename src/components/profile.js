import React, { Component } from 'react'
import profile from '../images/photo-collage.jpeg'
import resume from '../images/Resume_Kesha_Lake.pdf'

class Profile extends Component {

  render(){
    return(
        <div className="profile pink">
          <img className="profile-pic" src={profile} alt="It's My Face!" />
          <div className="overlay">
            <div className="about">
              <p>
              I love people, Ruby, and indoor plants. I'm great with the first two and not so great with the last one. I move about this earth looking for ways to make change. I believe that changing the world is easy when you start with what's right in front of you, whether that be a friend, a stranger, or a line of code. 
              </p>
              <br/>
              <a href={resume} download>Download My Resume</a>
            </div>
          </div>
      </div>
    )
  }

}

export default Profile;
