export const variantColumns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 300 },
  { field: "variantName", headerName: "variantName", width: 300 },
];
export const variantOptionColumns = [
  { field: "id", headerName: "ID", width: 400 },
  { field: "name", headerName: "Name", width: 400 },
];
export const userColumns = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'name',
    headerName: 'Photo&UserName',
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },

  {
    field: 'phone',
    headerName: 'phone',
    width: 120,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 80,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 100,
  },
  {
    field: 'city',
    headerName: 'City',
    flex: 1,
    width: 100,
  },
  {
    field: 'street',
    headerName: 'Street',
    width: 100,
    flex: 1,
  },
  {
    field: 'zip',
    headerName: 'Zip Code',
    width: 100,
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const heroColumns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'title',
    headerName: 'Title',
    width: 350,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 360,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="" />
        </div>
      );
    },
  },
];
export const categoryColumns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'name',
    width: 350,
  },
  {
    field: 'photo',
    headerName: 'photo',
    width: 360,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="" />
        </div>
      );
    },
  },
];
export const subCategoryColumns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'name',
    width: 250,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 250,
  },
  {
    field: 'photo',
    headerName: 'photo',
    width: 260,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="" />
        </div>
      );
    },
  },
];
