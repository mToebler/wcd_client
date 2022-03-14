import React, { Component } from 'react';
import './newsPreview.css';
import axios from 'axios';

export default class NewsPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { newsArray: [] };
    console.log('constructor: props:', this.props);
  }

  componentDidMount() {
    axios.get(`http://localhost:3030/api/v1/news`).then((res) => {
      const newsArray = res.data;
      this.setState({ newsArray });
      console.log('newsPrev: state:', this.state);
    });
  }

  onDivClick = (changeStory, urlMedia) => {
    console.log('onDivCLick', urlMedia)
    this.props.setStoryText(changeStory)
    this.props.setImageText(urlMedia.indexOf('ttp') + 1 ? urlMedia : `https://dummyimage.com/480x360/fff/000655.png&text=+WCD`)
  }

  render() {

    const newsArray = this.state.newsArray;    
    const newsCards = newsArray.map((story, index) =>
      <div onClick={() => this.onDivClick(story.content, (story.urlToImage ? story.urlToImage : story.source['name']))} className='previewCard' key={ story.publishedAt + index}>
      <h3 className='previewTitle'>
        {story.title}
      </h3>
      <div className='lowerDetails'>
        <div className='imgContainer'>
          <img
              src={story.urlToImage ? story.urlToImage : `https://dummyimage.com/480x360/fff/000655.png&text=+${story.source['name']}`}
          alt='Story Image'
          className='newsImage'
          />
        </div>
        <div className='lowerByline'>
          <div className='author'>{story.author ? story.author : ''}</div>
            <div className='date'>{String(story.publishedAt).slice(0, 10)} </div>
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
