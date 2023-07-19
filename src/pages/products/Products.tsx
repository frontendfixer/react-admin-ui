import './products.scss';

import { GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';
import { products } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (props: { row: { img: string } }) => {
      return <img src={props.row.img || '/noavatar.png'} alt="" />;
    },
  },
  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 150,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'Price',
    width: 200,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: 'boolean',
  },
];

function Products() {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h2>Products</h2>
        <button type="button" onClick={() => setOpen(true)}>
          Add new Products
        </button>
      </div>
      <DataTable slug="products" columns={columns} row={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Products;
