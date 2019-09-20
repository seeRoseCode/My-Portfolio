import React, { Component } from 'react'
import profile from '../images/photo-collage.jpeg'

class Profile extends Component {

  render(){
    return(
      <div className="container">
        <img className="profile-pic" src={profile}/>
        <div class="middle">
          <div class="text">About</div>
        </div>
      </div>
    )
  }

}

export default Profile;
