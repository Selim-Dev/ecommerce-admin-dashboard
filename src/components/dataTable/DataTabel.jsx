import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../dataTabelSrc";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      const result = await axios.get("http://localhost:3000/api/v1/users");
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map((item, index) => {
            return {
              id: index,
              photo: item.photo,
              phone: item.phone,
              name: item.name,
              email: item.email,
              city: item.address.city,
              country: item.address.country,
              role: item.role,
              street: item.address.street,
              zip: item.address.zip,
              _id: item._id,
            };
          })
      );
    };
    GetUsers();
  }, []);
  console.log(data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New User
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
