import './zoneList.css'
import { DataGrid } from '@material-ui/data-grid';
import { Opacity, SyncDisabled, InfoOutlined } from '@material-ui/icons'
// import { zoneRows } from '../../../dummy';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import {authHeader} from '../../../services/auth.header'

export default class ZoneList extends React.Component {
   state = { zones: [] };
   
   columns = [
      { field: 'zoneNumber', headerName: 'Zones', width: 70 },
      {
         field: 'name', headerName: 'Name', width: 390 , renderCell: (params) => {            
               return (
                  <div className='zoneListZone'>
                     <img className='zoneListImg' src={params.row.imageUrl} alt='' />
                     <Link to={'/zone/'+params.row.zoneNumber}>
                        {params.row.name}                     
                     </Link>
                  </div>
               )
            }
      },
      {
         field: 'crop', headerName: 'Vegetation type', width: 190, renderCell: (params) => {
            return (
               <div className='zoneListCrop'>{params.row.customCrop['name']}</div>
            )
         }
      },
      {
         field: 'enabled',
         headerName: 'Enabled',    
         type: 'boolean',
         width: 160,
         },
         {
            field: 'action',
            headerName: 'More Info',
            width: 145,
            renderCell: (params) => {
               return (
                  <div className='actionsWrapper'>
                     <Link to={'/zone/'+params.row.zoneNumber}>
                        <button className='zoneInfoButton'><InfoOutlined /></button>
                     </Link>                  
                  </div>
                  
               )
            }
      }
   ];

   componentDidMount() {
      // axios.get(`https://jsonplaceholder.typicode.com/users`)
      axios.get(`http://localhost:3030/api/v1/rachio/zone`, { headers: authHeader() })
        .then(res => {
           const zones = res.data;
           console.log(zones);
          this.setState({ zones });
        })
    }

   // const [data, setData] = useState(zoneRows);

   render() {
      return (
         <div className='zoneList'>
            <DataGrid
               rows={this.state.zones}
               columns={this.columns}
               pageSize={8}
               rowsPerPageOptions={[8]}               
            />
         </div>
      )
   }
}
