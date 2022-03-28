import { React, useState, useEffect } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import "./Create.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VarianOptiont_URL = "http://localhost:3000/api/v1/variantOption";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDI0NDNiZDNkODVjM2Y4MGM0MThhMSIsImlhdCI6MTY0ODUxMDAxMSwiZXhwIjoxNjU2Mjg2MDExfQ.qnEsXaehGOsZXm3IUw50M7dI14zpj3Z5FsARXt4-RyA";

const New = ({ title, input }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const GetUsers = async () => {
      const result = await axios.get("http://localhost:3000/api/v1/variant", {
        headers: {
          Authorization: token,
        },
      });
      console.log(result?.data?.data?.data);
      setData(
        result?.data?.data?.data &&
          result?.data?.data?.data.map((item, index) => {
            return {
              name: item.name,
              _id: item._id,
            };
          })
      );
    };
    GetUsers();
  }, []);
  const onSubmit = async (data) => {
    const response = await axios.post(VarianOptiont_URL, data, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    console.log(response?.data);
    navigate("/variantOptions", { replace: true });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formInput">
                <label>VariantOption Name</label>
                <input {...register("name", { required: true })} />
                {errors.name && <span>VarianOptiont Name is required</span>}
              </div>
              <select {...register("variant", { required: true })}>
                {data?.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))}
              </select>
              <div className="formInput">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
