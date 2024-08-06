"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from 'react';

interface TableData {
  fullName: string;
  serialNumber: string;
  NationalIdentityNumber: string;
  fileHash: string;
  latitude: number;
  longitude: number;
}

interface DataViewProps {
  tableData: TableData[];
}

const Table: React.FC<DataViewProps> = ({ tableData }) => {
  const rows = tableData.map((data, index) => ({
    id: index,
    col1: index + 1,
    col2: data.fullName,
    col3: data.serialNumber,
    col4: data.NationalIdentityNumber,
    col5: data.fileHash,
    col6: data.latitude,
    col7: data.longitude,
  }));

  const columns: GridColDef[] = [
    { field: "col1", headerName: "#", width: 225 },
    { field: "col2", headerName: "Full Name", width: 225 },
    { field: "col3", headerName: "Serial Number", width: 225 },
    { field: "col4", headerName: "NIN", width: 225 },
    { field: "col5", headerName: "Crypto Hash", width: 225 },
    { field: "col6", headerName: "Latitude", width: 225 },
    { field: "col7", headerName: "Longitude", width: 225 },
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
