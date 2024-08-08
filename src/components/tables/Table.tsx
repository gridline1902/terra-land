"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from 'react';

interface TableData {
  id: string,
  full_name: string;
  serial_number: string;
  national_id_number: string;
  latitudinal_location: string;
  longitudinal_location: string;
}

interface DataViewProps {
  tableData: TableData[];
}

const Table: React.FC<DataViewProps> = ({ tableData }) => {
  const rows = tableData.map((data, index) => ({
    id: data.id,
    col1: index + 1,
    col2: data.full_name,
    col3: data.serial_number,
    col4: data.national_id_number,
    col5: data.latitudinal_location,
    col6: data.longitudinal_location,
  }));

  const columns: GridColDef[] = [
    { field: "col1", headerName: "#", width: 225 },
    { field: "col2", headerName: "Full Name", width: 225 },
    { field: "col3", headerName: "Serial Number", width: 225 },
    { field: "col4", headerName: "NIN", width: 225 },
    { field: "col5", headerName: "Latitude", width: 225 },
    { field: "col6", headerName: "Longitude", width: 225 },
  ];

  return (
    <main>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid autoHeight rows={rows} columns={columns} />
      </div>
    </main>
  );
};

export default Table;
