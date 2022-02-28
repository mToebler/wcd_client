import './weeklyForcast.css'
import {WbSunny, Opacity, Speed, ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function WeeklyForcast() {
  return (
    <div className="weeklyForcast">
      <h3> Extended Forcast</h3>
      <div className="dailyContainer">
         <div className="day">
            <div className="dailyDay">Sat</div>
            <div className="dailyIcon"><WbSunny/></div>
            <div className="dailyStatus">clear</div>
            <div className="dailyHiLo">39° |  65°</div>
         </div>
         <div className="day">
            <div className="dailyDay">Sat</div>
            <div className="dailyIcon"><WbSunny/></div>
            <div className="dailyStatus">clear</div>
            <div className="dailyHiLo">39° |  65°</div>
         </div>
         <div className="day">
            <div className="dailyDay">Sat</div>
            <div className="dailyIcon"><WbSunny/></div>
            <div className="dailyStatus">clear</div>
            <div className="dailyHiLo">39° |  65°</div>
         </div>
         <div className="day">
            <div className="dailyDay">Sat</div>
            <div className="dailyIcon"><WbSunny/></div>
            <div className="dailyStatus">clear</div>
            <div className="dailyHiLo">39° |  65°</div>
         </div>
         <div className="day">
            <div className="dailyDay">Sat</div>
            <div className="dailyIcon"><WbSunny/></div>
            <div className="dailyStatus">clear</div>
            <div className="dailyHiLo">39° |  65°</div>
         </div>
         <div className="day">
            <div className="dailyDay">Sat</div>
            <div className="dailyIcon"><WbSunny/></div>
            <div className="dailyStatus">clear</div>
            <div className="dailyHiLo">39° |  65°</div>
         </div>
      </div>
    </div>
  )
}
