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

export const ContactColumns = [
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'subject',
    headerName: 'Subject',
    width: 200,
  },
  {
    field: 'message',
    headerName: 'Message',
    width: 500,
  },
];
