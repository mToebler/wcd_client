import React from 'react'
import './weeklyForcast.css'
import {WbSunny, Opacity, Speed, ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default class WeeklyForcast extends React.Component {
   constructor(props) {
      super(props);      
      this.options = { weekday: 'short' };
      this.imgUrl = `https://www.metaweather.com/static/img/weather/c.svg`
   }

   render() {
      
      const dailyForecast = this.props.forecast.map((daily, index) =>
         <div key={ daily.id } className="day">
            <div className="dailyDay">{Intl.DateTimeFormat('en-US', this.options).format(new Date(daily.applicable_date + 'T00:00:00'))}</div>
            <div className="dailyIcon"><img src={`https://www.metaweather.com/static/img/weather/${daily.weather_state_abbr}.svg`}
               alt={daily.weather_state_abbr}
               height="24px" width="24px"
            /></div>
            <div className="dailyStatus">{daily.weather_state_name}</div>
            <div className="dailyHiLo">{Math.round((daily.min_temp * 9 / 5) + 32)}° |  {Math.round((daily.max_temp * 9 / 5) + 32)}°</div>
         </div>
         
      );
      // console.log('dailyForecast', dailyForecast);

      return (
         <div className="weeklyForcast">
            <h3> Extended Forcast</h3>
            <div className="dailyContainer">               
               {dailyForecast}
            </div>
         </div>
      )
   }
}
