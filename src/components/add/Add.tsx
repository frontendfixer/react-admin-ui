import './add.scss';

import { GridColDef } from '@mui/x-data-grid';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Add(props: Props) {
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add new item
    alert('new item submitted');
  };

  return (
    <div className="add">
      <div className="modal">
        <button
          className="closeBtn"
          type="button"
          onClick={() => props.setOpen(false)}
        >
          x
        </button>
        <h2>Add new {props.slug}</h2>
        <form onSubmit={handelSubmit}>
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className="item">
                <label htmlFor={column.field}>{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                  id={column.field}
                />
              </div>
            ))}
          <button type="submit" className="submitBtn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
