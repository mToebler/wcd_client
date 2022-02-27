import './widgetSm.css'
import {Visibility} from '@material-ui/icons'

export default function WidgetSm() {
  return (
     <div className='widgetSm'>
        <span className="widgetSmTitle">Current Water Usage</span>
        <ul className="widgetSmList">
        <li className="widgetSmListItem">
              <div className="widgetSmUsage">
                 <span className="widgetSmUsageTime">Now:</span>
                 <span className="widgetSmUsageAmount">4.5 gpm</span>
                 <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
              </div>
           </li>
           <li className="widgetSmListItem">

              <div className="widgetSmUsage">
                 <span className="widgetSmUsageTime">1 minute ago:</span>
                 <span className="widgetSmUsageAmount">3.8 gpm</span>
                 <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
              </div>
           </li>
           <li className="widgetSmListItem">

              <div className="widgetSmUsage">
                 <span className="widgetSmUsageTime">2 minutes ago:</span>
                 <span className="widgetSmUsageAmount">5.5 gpm</span>
                 <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
              </div>
           </li>
           <li className="widgetSmListItem">

              <div className="widgetSmUsage">
                 <span className="widgetSmUsageTime">3 minutes ago:</span>
                 <span className="widgetSmUsageAmount">5.5 gpm</span>
                 <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
              </div>
           </li>
           <li className="widgetSmListItem">

              <div className="widgetSmUsage">
                 <span className="widgetSmUsageTime">4 minutes ago:</span>
                 <span className="widgetSmUsageAmount">5.5 gpm</span>
                 <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
              </div>
           </li>
        </ul>
     </div>
  )
}
