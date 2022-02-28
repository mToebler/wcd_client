import './widgetLg.css'

export default function WidgetLg() {   
   return (
     <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Irrigation Activity</h3>
        <table className="widgetLgTable">
           <tr className="widgetLgTr">
              <th className="widgetLgTh">Zone</th>
              <th className="widgetLgTh">Start Time</th>
              <th className="widgetLgTh">Duration</th>
              <th className="widgetLgTh">Usage</th>
           </tr>
           <tr className="widgetLgTr">
              <td className="widgetLgZone">
                 <img src="https://prod-media-photo.rach.io/1d6dd916-e2d2-42c7-967c-f66e661daaca" alt="" className="widgetLgImg" />
                 <span className="widgetLgName">1. Back Planter</span>
              </td>
              <td className="widgetLgDate">25 Feb 2022  13:05</td>
              <td className="widgetLgDuration">15 mins</td>
              <td className="widgetLgUsage">52 gal</td>
           </tr>
           <tr className="widgetLgTr">
              <td className="widgetLgZone">
                 <img src="https://prod-media-photo.rach.io/1d6dd916-e2d2-42c7-967c-f66e661daaca" alt="" className="widgetLgImg" />
                 <span className="widgetLgName">1. Back Planter</span>
              </td>
              <td className="widgetLgDate">25 Feb 2022  13:05</td>
              <td className="widgetLgDuration">15 mins</td>
              <td className="widgetLgUsage">52 gal</td>
           </tr>
           <tr className="widgetLgTr">
              <td className="widgetLgZone">
                 <img src="https://prod-media-photo.rach.io/1d6dd916-e2d2-42c7-967c-f66e661daaca" alt="" className="widgetLgImg" />
                 <span className="widgetLgName">1. Back Planter</span>
              </td>
              <td className="widgetLgDate">25 Feb 2022  13:05</td>
              <td className="widgetLgDuration">15 mins</td>
              <td className="widgetLgUsage">52 gal</td>
           </tr>
           <tr className="widgetLgTr">
              <td className="widgetLgZone">
                 <img src="https://prod-media-photo.rach.io/1d6dd916-e2d2-42c7-967c-f66e661daaca" alt="" className="widgetLgImg" />
                 <span className="widgetLgName">1. Back Planter</span>
              </td>
              <td className="widgetLgDate">25 Feb 2022  13:05</td>
              <td className="widgetLgDuration">15 mins</td>
              <td className="widgetLgUsage">52 gal</td>
           </tr>
        </table>
     </div>
  )
}
