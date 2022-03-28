export const userColumns = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'name',
    headerName: 'Photo&UserName',
    width: 160,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.photo} alt='' />
          {params.row.name}
        </div>
      );
    },
  },
];
export const categoryColumns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'name',
    headerName: 'Category Name',
    width: 400,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.photo} alt='' />
          {params.row.name}
        </div>
      );
    },
  },
];
