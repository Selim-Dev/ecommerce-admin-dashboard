export const userColumns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "name",
    headerName: "Photo&UserName",
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
    field: "email",
    headerName: "Email",
    width: 150,
  },

  {
    field: "phone",
    headerName: "phone",
    width: 120,
  },
  {
    field: "role",
    headerName: "Role",
    width: 80,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    width: 100,
  },
  {
    field: "street",
    headerName: "Street",
    width: 100,
    flex: 1,
  },
  {
    field: "zip",
    headerName: "Zip Code",
    width: 100,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
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
