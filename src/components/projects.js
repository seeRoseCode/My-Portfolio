import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'


class Projects extends Component {

  render(){

    return(
      <Carousel>
        <Carousel.Item>
          <div className="projects">
            <iframe width="600" height="402" src="https://www.youtube.com/embed/44erbzteLdI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="projects">
            <iframe width="600" height="402" src="https://www.youtube.com/embed/44erbzteLdI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="projects">
            <iframe width="600" height="402" src="https://www.youtube.com/embed/44erbzteLdI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    )
  }

}
export default Projects;
