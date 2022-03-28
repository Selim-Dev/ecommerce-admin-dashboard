import "./Index.scss";
import { DataGrid } from "@mui/x-data-grid";
import { variantOptionColumns } from "../../../dataTabelSrc";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI0NDNiZDNkODVjM2Y4MGM0MThhMSIsImlhdCI6MTY0ODUxMDAxMSwiZXhwIjoxNjU2Mjg2MDExfQ.qnEsXaehGOsZXm3IUw50M7dI14zpj3Z5FsARXt4-RyA";
const Datatable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      const result = await axios.get("http://localhost:3000/api/v1/variant");
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map((item, index) => {
            return {
              id: index,
              name: item.name,
              _id: item._id,
            };
          })
      );
    };
    GetUsers();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/api/v1/variant/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(
          data.filter((item) => {
            return item._id !== id;
          })
        );
      });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="deleteButton">
              <Link
                style={{ textDecoration: "none" }}
                to={`/variants/${params.row._id}/Edit`}
              >
                Edit
              </Link>
            </div>
            <div
              className="deleteButton"
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
    <div className="datatable">
      <div className="datatableTitle">
        Variants
        <Link to="/variants/create" className="link">
          Add New Variant
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={variantOptionColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
