import React from 'react'
import './weeklyForcast.css'
import {WbSunny, Opacity, Speed, ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default class WeeklyForcast extends React.Component {
   constructor(props) {
      super(props);      
      console.log('WFF props', this.props)
      console.log('WF props: ', this.props.forecast)      
      console.log('WF all props:', this.props)
      this.options = { weekday: 'short' };
   }

   render() {
      console.log('WF forecast:', this.props.forecast);
      console.log('WF forecast1:', this.props.forecast[1]);
      
      const dailyForecast = this.props.forecast.map((daily, index) =>
         <div className="day">
            <div className="dailyDay">{Intl.DateTimeFormat('en-US', this.options).format(new Date(daily.applicable_date))}</div>
            <div className="dailyIcon"><WbSunny /></div>
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
