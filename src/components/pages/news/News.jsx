import './news.css';
import React from 'react';
import axios from 'axios';
import Story from './Story';
import NewsPreview from './NewsPreview'
export default function News() {
  return (
    <div className='news'>
      <div className='newsTitleContainer'>
        <h1 className='newsTitle'>Water Conservation News</h1>
      </div>
      <div className='newsContainer'>
        <div className='newsShow'>
          <div className="newsList">
            <div className="newsScroll">
              <NewsPreview/>
            </div>
          </div>
        </div>
        <div className='newsStoryShow'>
          <Story className='storyContainer' />
        </div>                
      </div>
    </div>
  );
}
