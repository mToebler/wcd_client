import React, { Component } from 'react'
import './story.css'

export default class Story extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <div>{this.props.storyText}</div>
        <div className="imageBigContainer">
          <img src={this.props.imageText} className='storyBigImage' alt='related media' />
        </div>
      </div>
    )
  }
}
