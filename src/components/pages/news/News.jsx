import './news.css';
import React, {useState} from 'react';
import axios from 'axios';
import Story from './Story';
import NewsPreview from './NewsPreview'

export default function News() {

  const [storyText, setStoryText] = useState('Click a story from the right');

  const [source, setSource] = useState('WCD');

  const [imageText, setImageText] = useState(`https://dummyimage.com/480x360/fff/000655.png&text=+WCD`);

  const [link, setLink] = useState('#');

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
            <div className="newsScroll disable-scrollbars">
              <NewsPreview setStoryText={setStoryText} setImageText={setImageText} setSource={setSource} setLink={setLink}/>
            </div>
          </div>
        </div>
        <div className='newsStoryShow'>
          <Story className='storyContainer' storyText={storyText} imageText={imageText} source={source} link={link}
        />
        </div>                
      </div>
    </div>
  );
}
