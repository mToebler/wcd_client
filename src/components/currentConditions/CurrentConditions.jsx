import './currentConditions.css'
import {WbSunny, Opacity, Speed, ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function CurrentConditions() {
  return (
    <div className='currentConditions'>
    <div className="leftContainer">
     <h3> Current Conditions</h3>
      <div className='degreeInfo'>
         <WbSunny className="currentTempIcon"/>
         <span className="currentDegrees">36°</span>
      </div>
      <div className="currentStatus">
         clear sky
      </div>
    </div>
    <div className="rightContainer">
      <span className="rightContainerTitle"></span>
      <div className="weatherShowInfo">
          <Opacity className="weatherShowIcon" />
          <span className="weatherShowInfoTitle">humidity:</span>
          <span className="weatherShowInfoStat">23%</span>
      </div>
      <div className="weatherShowInfo">
          <Speed className="weatherShowIcon" />
          <span className="weatherShowInfoTitle">windspeed:</span>
          <span className="weatherShowInfoStat">8mph</span>
      </div>
      <div className="weatherShowInfo">
          <ArrowUpward className="weatherShowIcon" />
          <span className="weatherShowInfoTitle">High</span>
          <span className="weatherShowInfoStat">68°</span>
      </div>
      <div className="weatherShowInfo">
          <ArrowDownward className="weatherShowIcon" />
          <span className="weatherShowInfoTitle">Low</span>
          <span className="weatherShowInfoStat">37°</span>
      </div>
    </div>
    </div>
  )
}
