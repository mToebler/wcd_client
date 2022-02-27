import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
     <div className='sidebar'>
        <div className='sidebarWrapper'>
           <div className="sidebareMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                 <li className="sidebarListItem active">
                    Home
                 </li>
                 <li className="sidebarListItem">
                    Analytics
                 </li>
                 <li className="sidebarListItem">
                    Zones
                 </li>
                 <li className="sidebarListItem">
                    Usage
                 </li>
                 <li className="sidebarListItem">
                    Weather
                 </li>
                 <li className="sidebarListItem">
                    News
                 </li>
              </ul>
           </div>
        </div>
    </div>
  )
}
