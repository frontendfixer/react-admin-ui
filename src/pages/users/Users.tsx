import './users.scss';

import { GridColDef } from '@mui/x-data-grid';

import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';

function Users() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 5 },
    {
      field: 'avatar',
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
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 150,
    },
    {
      field: 'verified',
      headerName: 'Verified',
      width: 100,
      type: 'boolean',
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <button type="button">Add new Users</button>
      </div>
      <DataTable slug="users" columns={columns} row={userRows} />
    </div>
  );
}

export default Users;
