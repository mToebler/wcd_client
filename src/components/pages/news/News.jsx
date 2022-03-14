import './news.css';
import React, {useState} from 'react';
import axios from 'axios';
import Story from './Story';
import NewsPreview from './NewsPreview'

export default function News() {

  const [storyText, setStoryText] = useState('Click a story from the right');

  const [imageText, setImageText] = useState(`https://dummyimage.com/480x360/fff/000655.png&text=+WCD`);

  const storyClick = (event) => {
    storyText = event.target.value;
  }

  return (
    <div className='news'>
      <div className='newsTitleContainer'>
        <h1 className='newsTitle'>Water Conservation News</h1>
      </div>
      <div className='newsContainer'>
        <div className='newsShow'>
          <div className="newsList">
            <div className="newsScroll">
              <NewsPreview setStoryText={setStoryText} setImageText={setImageText}/>
            </div>
          </div>
        </div>
        <div className='newsStoryShow'>
          <Story className='storyContainer' storyText={storyText} imageText={imageText}
        />
        </div>                
      </div>
    </div>
  );
}
