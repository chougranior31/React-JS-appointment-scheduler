import React, { Fragment, useEffect } from 'react'

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { getAppoitment } from '../../redux/features/Agenda/AgendaSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Tables() {


    const dispatch = useDispatch()
    const { appoitment } = useSelector((state) => state.agenda)

    console.log(appoitment);

    useEffect(() => {
      dispatch(getAppoitment())
    },  [dispatch]);


    const rows: GridRowsProp = appoitment;
      
      const columns: GridColDef[] = [
        { field: 'name', headerName: 'Nom', width: 150 },
      ];
      
      


      const handlleTesteClocik = (value) => {
        console.log(value);
      }


  return (
    <Fragment>
        <div style={{ height: 300, width: "100%"}} >
            <DataGrid 
            onRowClick={(value) => handlleTesteClocik(value)}
            rows={rows} columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
        </div>
    </Fragment>
  )
}
