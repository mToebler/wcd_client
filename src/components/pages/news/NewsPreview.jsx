import React, { Component } from 'react';
import './newsPreview.css';
import axios from 'axios';

export default class NewsPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { newsArray: [] };
  }

  componentDidMount() {
    axios.get(`http://localhost:3030/api/v1/news`).then((res) => {
      const newsArray = res.data;
      this.setState({ newsArray });
      console.log('newsPrev: state:', this.state);
    });
  }

  render() {

    const newsArray = this.state.newsArray;    
    const newsCards = newsArray.map((story, index) =>
    <div className='previewCard'>
      <h3 className='previewTitle'>
        {story.title}
      </h3>
      <div className='lowerDetails'>
        <div className='imgContainer'>
          <img
          src={story.urlToImage}
          alt='Story Image'
          className='newsImage'
          />
        </div>
        <div className='lowerByline'>
          <div className='author'>{story.author ? story.author : ''}</div>
          <div className='date'>{story.publishedAt}</div>
        </div>
      </div>
    </div>
  )
    return (
      <div className='previewContainer'>
        {newsCards}
        
      </div>
    );
  }
}
