import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { categoryColumns } from '../../../dataTabelSrc.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DataTabelCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetCategory = async () => {
      const result = await axios.get('http://localhost:3000/api/v1/category');
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map(({ name, photo, _id }, index) => {
            return {
              _id,
              id: index,
              photo: photo,
              name: name,
            };
          })
      );
    };
    GetCategory();
  }, []);

  const handleDelete = async (_id) => {
    await axios
      .delete(`http://localhost:3000/api/v1/category/${_id}`, {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDExOGJkZDM5ODg5MjBjODc0ZjUyMCIsImlhdCI6MTY0ODQ3NDcyMywiZXhwIjoxNjU2MjUwNzIzfQ.aavNeediEDxtYFF0gnX0WX9ymthnENqRNT0x8hnn2Zc'}`,
        },
      })
      .then((res) => {
        setData(
          data.filter((item) => {
            console.log(item);
            return item._id !== _id;
          })
        );
      });
    console.log(data);
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link
              to={`/category/${params.row._id}/edit`}
              style={{ textDecoration: 'none' }}
            >
              <div className='viewButton'>Edit</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New Category
        <Link to='/category/new' className='link'>
          Add New Category
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={categoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTabelCategory;
