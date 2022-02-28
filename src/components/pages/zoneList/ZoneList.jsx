import './zoneList.css'
import { DataGrid } from '@material-ui/data-grid';
import { Opacity, SyncDisabled } from '@material-ui/icons'
import { zoneRows } from '../../../dummy';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
   {
      field: 'name', headerName: 'Zone', width: 135, renderCell: (params) => {
         return (
            <div className='zoneListZone'>
               <img className='zoneListImg' src={params.row.imgUrl} alt='' />
               Zone {params.row.id}
        </div>
     )
  } },
  { field: 'description', headerName: 'Description', width: 300 },
  {
    field: 'vegetation',
    headerName: 'Vegetation type',    
    width: 170,
  },
  {
    field: 'average',
    headerName: 'Average GPM',    
    type: 'number',
    width: 160,
   },
   {
      field: 'action',
      headerName: 'Actions',
      width: 125,
      renderCell: (params) => {
         return (
            <div className='actionsWrapper'>
               <Link to={'/zone/'+params.row.id}>
                  <button className='zoneWaterButton'><Opacity className='water' /></button>
               </Link>
            <button className='zoneDisableButton'><SyncDisabled className='disable'/></button>
            </div>
            
         )
      }
  }
];


export default function ZoneList() {
   const [data, setData] = useState(zoneRows);

  return (
     <div className='zoneList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
           checkboxSelection
           disableSelectionOnClick
      />
    </div>
  )
}
