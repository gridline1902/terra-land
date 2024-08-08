"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Document {
  id: number;
  created_at: string;
  full_name: string | null;
  serial_number: string | null;
  national_id_number: string | null;
  latitudinal_location: string | null;
  longitudinal_location: string | null;
}

interface TableProps {
  tableData: Document[];
}

const Table: React.FC<TableProps> = ({ tableData }) => {
  const rows = tableData.map((data, index) => ({
    id: data.id,
    col1: index + 1,
    col2: data.full_name,
    col3: data.serial_number,
    col4: data.national_id_number,
    col5: data.latitudinal_location,
    col6: data.longitudinal_location,
    col7: `${data.latitudinal_location},${data.longitudinal_location}`,
  }));

  const columns: GridColDef[] = [
    { field: "col1", headerName: "#", width: 225 },
    { field: "col2", headerName: "Full Name", width: 225 },
    { field: "col3", headerName: "Serial Number", width: 225 },
    { field: "col4", headerName: "NIN", width: 225 },
    { field: "col5", headerName: "Latitude", width: 225 },
    { field: "col6", headerName: "Longitude", width: 225 },
    {
      field: "col7",
      headerName: "Location",
      width: 250,
      renderCell: (params) => {
        const [latitude, longitude] = params.value.split(",");
        const mapsUrl = `https://www.google.com/maps/@${latitude},${longitude},51m`;
        return (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a73e8", textDecoration: "underline" }}
          >
            View Location
          </a>
        );
      }
    }
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
