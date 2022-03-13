import React from 'react'
import axios from 'axios'
import './weather.css'
import CurrentConditions from '../../currentConditions/CurrentConditions'
import WeeklyForcast from '../../weeklyForcast/WeeklyForcast'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {forecast: null};
  }

  componentDidMount() {
    // call weather
    axios
      .get(`http://localhost:3030/api/v1/weather`)
      .then((res) => {        
        const forecast = res.data;
        const currentWeather = forecast[0];
        console.log("weather.jsx, receeived:", currentWeather)
        this.setState({ forecast })        
        // this.setState({ forecast })        

      }).catch((err) => {
        console.error('Weather error!:', err);
      }).finally(() =>{
        this.render()
      });
  }

  render() {           
    if(!this.state.forecast) {
      return <div/>
    }
    let currentWeather = this.state.forecast[0]
    console.log('WW - forecast', this.state.forecast)
    return (
      <div className='weather'>
        <CurrentConditions weather={currentWeather} current={currentWeather.weather_state_name} temp={currentWeather.the_temp} image_token={currentWeather.weather_state_abbr}/>
        <WeeklyForcast forecast={this.state.forecast}/>
      </div>
    )
  }
}
