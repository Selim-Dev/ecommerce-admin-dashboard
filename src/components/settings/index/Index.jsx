import { React, useState, useEffect } from "react";
import "./Index.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const token = localStorage.getItem("token");

const Settings = ({ title, input }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const getSingleVariant = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/settings/62428ec79ec09b7688808241",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.data?.data?.data) {
        setValue("title", response?.data?.data?.data.title);
      }
    };
    getSingleVariant();
  }, [data, setValue]);

  const onSubmit = async (data) => {
    await axios.patch(
      "http://localhost:3000/api/v1/settings/62428ec79ec09b7688808241",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    navigate("/dashboard/settings", { replace: true });
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formInput">
                <label>Title</label>
                <input {...register("title", { required: true })} />
              </div>
              {errors.title && <span>title is required</span>}
              <div className="formInput">
                <label>Email</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </div>
              {errors.email && <span>Email is required</span>}
              <div className="formInput">
                <label>Password</label>
                <input {...register("password", { required: true })} />
              </div>
              {errors.password && <span>password is required</span>}
              <div className="formInput">
                <label>PasswordConfirm</label>
                <input {...register("passwordConfirm", { required: true })} />
              </div>
              {errors.passwordConfirm && (
                <span>passwordConfirm is required</span>
              )}
              <div className="formInput">
                <label>phone</label>
                <input {...register("phone", { required: true })} />
              </div>
              {errors.phone && <span>phone is required</span>}
              <div className="formInput">
                <label>role</label>
                <select {...register("role", { required: true })}>
                  <option value="user">user</option>0.
                  <option value="seller">seller</option>
                </select>
              </div>
              {errors.role && <span>role is required</span>}
              <div className="formInput">
                <label>Country</label>
                <input {...register("address.country", { required: true })} />
              </div>
              {errors.address?.country && <span>country is required</span>}
              <div className="formInput">
                <label>City</label>
                <input {...register("address.city", { required: true })} />
              </div>
              {errors.address?.city && <span>city is required</span>}
              <div className="formInput">
                <label>Street</label>
                <input {...register("address.street", { required: true })} />
              </div>
              {errors.address?.street && <span>street is required</span>}
              <div className="formInput">
                <label>Zip Code</label>
                <input {...register("address.zip", { required: true })} />
              </div>
              {errors.address?.zip && <span>zip code is required</span>}
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

export default Settings;
