import './weather.css'
import CurrentConditions from '../../currentConditions/CurrentConditions'
import WeeklyForcast from '../../weeklyForcast/WeeklyForcast'

export default function Weather() {
  return (
    <div className='weather'>
      <CurrentConditions />
      <WeeklyForcast />
    </div>
  )
}
