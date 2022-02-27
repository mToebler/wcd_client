import './zoneList.css'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Zone name', width: 130 },
  { field: 'description', headerName: 'Description', width: 255 },
  {
    field: 'vegetation',
    headerName: 'Vegetation type',    
    width: 180,
  },
  {
    field: 'average',
    headerName: 'Average GPM',    
    type: 'number',
    width: 180,
  },
];

const rows = [
  { id: 1, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 2, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 3, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 4, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 5, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 6, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 7, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 8, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 9, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 10, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 11, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 12, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 13, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 14, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 15, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  { id: 16, name: 'Back planter', description: 'Back planter, under stairs, and around BBQ', vegetation: 'shrubs', average: 12.3 },
  
];

export default function ZoneList() {
  return (
     <div className='zoneList'>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />``
    </div>
  )
}
