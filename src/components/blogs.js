import React, { Component } from 'react'

class Blogs extends Component{
  componentDidMount(){
    window.mediumWidget();
  }
  render(){
    return(
      <div id="widget-container">
        <div id="medium-widget"></div>
      </div>
    )
  }
}

export default Blogs;
