export const userColumns = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "name",
    headerName: "Product Name",
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
    field: "listPrice",
    headerName: "Price",
    width: 100,
  },

  {
    field: "category.name",
    headerName: " Category",
    width: 120,
  },
  {
    field: "subvaterynsme",
    headerName: "Sub Category",
    width: 130,
  },
  {
    field: "ratingsAverage",
    headerName: "Ratings",
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


// export const userColumns = [
//   { field: "id", headerName: "ID", width: 40 },
//   {
//     field: "name",
//     headerName: "Photo&UserName",
//     width: 160,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.photo} alt="" />
//           {params.row.name}
//         </div>
//       );
//     },
//   },
//   {
//     field: "email",
//     headerName: "hamada",
//     width: 150,
//   },

//   {
//     field: "phone",
//     headerName: "phone",
//     width: 120,
//   },
//   {
//     field: "role",
//     headerName: "Role",
//     width: 80,
//   },
//   {
//     field: "country",
//     headerName: "Country",
//     width: 100,
//   },
//   {
//     field: "city",
//     headerName: "City",
//     flex: 1,
//     width: 100,
//   },
//   {
//     field: "street",
//     headerName: "Street",
//     width: 100,
//     flex: 1,
//   },
//   {
//     field: "zip",
//     headerName: "Zip Code",
//     width: 100,
//     flex: 1,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 100,
//     renderCell: (params) => {
//       return (
//         <div className={`cellWithStatus ${params.row.status}`}>
//           {params.row.status}
//         </div>
//       );
//     },
//   },
// ];


