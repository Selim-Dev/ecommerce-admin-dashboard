import { React, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import "./Create.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Variant_URL = "http://localhost:3000/api/v1/variant";

const New = ({ title, input }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post(Variant_URL, data, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDEzNzg4NjUzYzU2MzE0MGFjMzA1OCIsImlhdCI6MTY0ODQ0MTI2NCwiZXhwIjoxNjU2MjE3MjY0fQ.f2SGUclDUhi8kAaS0pPR5alu0pSmp4P7uhWv43v2S2A",
      },
    });
    console.log(response);
    console.log(response?.data);
    navigate("/variants", { replace: true });
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
                <label>Variant Name</label>
                <input {...register("name", { required: true })} />
              </div>
              {errors.name && <span>Variant Name is required</span>}
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
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDEzNzg4NjUzYzU2MzE0MGFjMzA1OCIsImlhdCI6MTY0ODQ0MTI2NCwiZXhwIjoxNjU2MjE3MjY0fQ.f2SGUclDUhi8kAaS0pPR5alu0pSmp4P7uhWv43v2S2A
