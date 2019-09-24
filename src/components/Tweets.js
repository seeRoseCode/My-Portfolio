import React, { Component } from 'react'

class Tweets extends Component{
  render(){
    return(
      <div className="tweets">
        <a className="twitter-timeline" data-width="500" data-height="400" data-theme="light" data-link-color="#2B7BB9" href="https://twitter.com/keshalake?ref_src=twsrc%5Etfw">Tweets by keshalake</a>
      </div>
    )
  }
}

export default Tweets;
