import "./Index.scss";
import { DataGrid } from "@mui/x-data-grid";
import { variantColumns } from "../../../dataTabelSrc";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
  }, [data]);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/api/v1/variant/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDEzNzg4NjUzYzU2MzE0MGFjMzA1OCIsImlhdCI6MTY0ODQ0MTI2NCwiZXhwIjoxNjU2MjE3MjY0fQ.f2SGUclDUhi8kAaS0pPR5alu0pSmp4P7uhWv43v2S2A",
        },
      })
      .then(() => {
        setData(data.filter((item) => item.id !== id));
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
              <Link to={`/variants/${params.row._id}/Edit`}>Edit Variant</Link>
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
        columns={variantColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
