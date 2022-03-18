import React, { Component } from 'react'
import './story.css'

export default class Story extends Component {
  constructor(props) {
    super(props)

    console.log('imageText:', this.props.imageText)
  }
  render() {
    return (
      <div className='storyContainer'>
        <div className="imageBigContainer">
          <img src={this.props.imageText ? this.props.imageText : `https://dummyimage.com/480x360/fff/000655.png&text=+WCD` } className='storyBigImage' alt='related media' />
        </div>
        <div>{this.props.storyText}</div>
        <div className='storyLink'>
          <a href={this.props.link} target='_blank'>Link to Full Story</a>
        </div>
      </div>
    )
  }
}
