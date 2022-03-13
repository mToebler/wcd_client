import React from 'react'
import './currentConditions.css'
import {WbSunny, Opacity, Speed, ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default class CurrentConditions extends React.Component { 
  constructor(props) {    
    super(props)    
    // console.log('CC: props', this.props);
    this.current = this.props.current
    console.log('CC weather Props:', this.props.weather) 
    this.image = this.props.image_token
  }

  render() {
    return (
      <div className='currentConditions'>
        <div className="leftContainer">
          <h3> Las Vegas Current Conditions</h3>
          <div className='degreeInfo'>
            <img src={`https://www.metaweather.com/static/img/weather/${this.image}.svg`}
              alt={this.props.image_token}
              height="24px" width="24px"
              className="currentTempIcon"
            />
            <span className="currentDegrees">{((this.props.weather.the_temp * 9/5) + 32).toFixed(1)}°</span>
          </div>
          <div className="currentStatus">
            {this.current}
          </div>
        </div>
        <div className="rightContainer">
          <span className="rightContainerTitle"></span>
          <div className="weatherShowInfo">
            <Opacity className="weatherShowIcon" />
            <span className="weatherShowInfoTitle">humidity:</span>
            <span className="weatherShowInfoStat">{ this.props.weather.humidity}%</span>
          </div>
          <div className="weatherShowInfo">
            <Speed className="weatherShowIcon" />
            <span className="weatherShowInfoTitle">windspeed:</span>
            <span className="weatherShowInfoStat">{Math.round(this.props.weather.wind_speed)}mph</span>
          </div>
          <div className="weatherShowInfo">
            <ArrowUpward className="weatherShowIcon" />
            <span className="weatherShowInfoTitle">High</span>
            <span className="weatherShowInfoStat">{((this.props.weather.max_temp * 9 /5) + 32).toFixed(1)}°</span>
          </div>
          <div className="weatherShowInfo">
            <ArrowDownward className="weatherShowIcon" />
            <span className="weatherShowInfoTitle">Low</span>
            <span className="weatherShowInfoStat">{((this.props.weather.min_temp * 9 /5) + 32).toFixed(1)}°</span>
          </div>
        </div>
      </div>
    )
  }
}
