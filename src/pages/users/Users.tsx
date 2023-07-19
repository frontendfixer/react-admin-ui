import './users.scss';

import { GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 5 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 70,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />;
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    type: 'string',
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    type: 'string',
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    type: 'string',
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
    type: 'string',
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 100,
    type: 'boolean',
  },
];

function Users() {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button type="button" onClick={() => setOpen(true)}>
          Add new Users
        </button>
      </div>
      <DataTable slug="users" columns={columns} row={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Users;
