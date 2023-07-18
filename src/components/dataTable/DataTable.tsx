import './dataTable.scss';

import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[];
  row: object[];
  slug: string;
};

function DataTable(props: Props) {
  const handelDelete = (id: number) => {
    // delete the item
    console.log(`${id}-user has been deleted`);
  };
  const actionColumn: GridColDef = {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (prams) => {
      return (
        <div className="action">
          <Link to={`${props.slug}/${prams.row.id}`}>
            <img src="/view.svg" alt="  " />
          </Link>
          <button
            type="button"
            className="delete"
            onClick={() => handelDelete(prams.row.id)}
          >
            <img src="/delete.svg" alt="" />
          </button>
        </div>
      );
    },
  };

  return (
    <div className="dataGridTable">
      <DataGrid
        className="dataGrid"
        rows={props.row}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProp: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}

export default DataTable;
