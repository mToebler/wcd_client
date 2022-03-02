import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
     <div className='sidebar'>
        <div className='sidebarWrapper'>
           <div className="sidebareMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                 <Link to="/" className="link">
                 <li className="sidebarListItem active">
                    Home
                 </li>
                 </Link>
                 <li className="sidebarListItem">
                    Analytics
                 </li>
                 <Link to="/zones" className="link">
                 <li className="sidebarListItem">
                    Irrigation Zones
                 </li>
                 </Link>
                 <Link to="/weather" className="link">
                 <li className="sidebarListItem">
                    Weather
                 </li>
                 </Link>
                 <li className="sidebarListItem">
                    News
                 </li>
              </ul>
           </div>
        </div>
    </div>
  )
}
