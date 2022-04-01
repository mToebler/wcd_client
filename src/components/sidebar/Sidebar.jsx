import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         listId:1
      }
   }

   componentDidMount() {
      // this.setState({ listId });
   }

   handleClickLocal(id){
      if(this.state.listId !== id) {
         this.setState({ listId: id });         
      }
  }
   
   render() {
      return (
         <div className='sidebar'>
            <div className='sidebarWrapper'>
               <div className="sidebareMenu">
                  <h3 className="sidebarTitle">Dashboard</h3>
                  <ul className="sidebarList">
                     <Link to="/" className="link">
                        <li className={this.state.listId === 1 ? `sidebarListItem active` : `sidebarListItem`} onClick={this.handleClickLocal.bind(this, 1)}>
                           Home
                        </li>
                     </Link>
                     <Link to="/zones" className="link">
                        <li className={this.state.listId === 2 ? `sidebarListItem active` : `sidebarListItem`} onClick={this.handleClickLocal.bind(this, 2)}>
                           Irrigation Zones
                        </li>
                     </Link>
                     <Link to="/weather" className="link">
                        <li className={this.state.listId === 3 ? `sidebarListItem active` : `sidebarListItem`} onClick={this.handleClickLocal.bind(this, 3)}>
                           Weather
                        </li>
                     </Link>
                     <Link to="/news" className="link">
                        <li className={this.state.listId === 4 ? `sidebarListItem active` : `sidebarListItem`} onClick={this.handleClickLocal.bind(this, 4)}>
                           News
                        </li>
                     </Link>
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}
