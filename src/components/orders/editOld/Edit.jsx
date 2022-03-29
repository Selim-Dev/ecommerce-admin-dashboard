import { React, useState, useEffect } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './Edit.scss';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const REGISTER_URL = 'http://localhost:3000/api/v1/products';

const New = ({ title, input }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [category, setCategory] = useState([]);
  const [SubCategories, setSubCategories] = useState([]);
  const [Seller, setSeller] = useState([]);
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const token = localStorage.getItem('token');
  // console.log(Seller) ;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    alert(data);
    const formData = new FormData();

    formData.append('name', data.name);
    // formData.append('colors', data.colors);
    // formData.append('sizes', data.sizes);
    // formData.append('brand', data.brand);
    formData.append('description', data.description);

    formData.append('salePrice', data.salePrice);
    formData.append('listPrice', data.listPrice);
    formData.append('sku', data.sku);
    formData.append('stock', data.stock);
    let response;
    try {
      response = await axios.patch(REGISTER_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
    console.log(response?.data?.data?.data);
    // navigate('/dashboard/products', { replace: true });
  };

  // useEffect(() => {
  //   // prodcut
  //   const getProduct = async () => {
  //     console.log(productId);
  //     const takenProduct = await axios.get(
  //       `http://localhost:3000/api/v1/products/${productId}`
  //     );
  //     console.log(takenProduct?.data?.data?.data);
  //     setValue('name', takenProduct?.data?.data?.data.name);
  //     setValue('description', takenProduct?.data?.data?.data.description);
  //     setValue('listPrice', takenProduct?.data?.data?.data.listPrice);
  //     setValue('salePrice', takenProduct?.data?.data?.data.salePrice);
  //     setValue('sku', takenProduct?.data?.data?.data.sku);
  //     setValue('stock', takenProduct?.data?.data?.data.stock);
  //     // setValue('category', takenProduct?.data?.data?.data.category);
  //     // setValue('subCategory', takenProduct?.data?.data?.data.subCategory);
  //     // setValue('seller', takenProduct?.data?.data?.data.seller);
  //     // setValue('photo', takenProduct?.data?.data?.data.photo);
  //     // setProduct(() => takenProduct?.data?.data?.data);
  //   };
  //   getProduct();
  //   const getCategories = async () => {
  //     const categoreies = await axios.get(
  //       'http://localhost:3000/api/v1/category'
  //     );
  //     setCategory(categoreies?.data?.data?.data);
  //   };
  //   getCategories();
  //   // categories
  //   const getSeller = async () => {
  //     const Sellers = await axios.get(
  //       'http://localhost:3000/api/v1/users?role=seller',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(Sellers?.data?.data?.data);
  //     setSeller(Sellers?.data?.data?.data);
  //   };
  //   getSeller();
  // }, []);

  const handleCategoryChange = async (e) => {
    const subCategories = await axios.get(
      `http://localhost:3000/api/v1/category/${e.target.value}`
    );
    // console.log(subCategories?.data?.data?.data.subCategories);
    setSubCategories(subCategories?.data?.data?.data.subCategories);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        {/* <Navbar /> */}
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>

          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ flexGrow: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <label htmlFor="file">
                      Add Iamge: <DriveFolderUploadOutlinedIcon />
                    </label>
                    <input
                      type="file"
                      id="file"
                      // onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: 'none' }}
                      {...register('photo', { required: true })}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('name', { required: true })}
                      label="Name"
                      variant="standard"
                    />{' '}
                  </Grid>

                  {/* <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('colors', { required: true })}
                      label="Colors"
                      variant="standard"
                    />{' '}
                  </Grid> */}

                  {/* <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('sizes', { required: true })}
                      label="Sizes"
                      variant="standard"
                    />{' '}
                  </Grid> */}

                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('description', { required: true })}
                      label="Description"
                      variant="standard"
                    />{' '}
                  </Grid>

                  {/* <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('brand', { required: true })}
                      label="Brand"
                      variant="standard"
                    />{' '}
                  </Grid> */}

                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('listPrice', { required: true })}
                      label="ListPrice"
                      variant="standard"
                    />{' '}
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('salePrice', { required: true })}
                      label="SalePrice"
                      variant="standard"
                    />{' '}
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('sku', { required: true })}
                      label="Sku"
                      variant="standard"
                    />{' '}
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id="outlined-basic"
                      {...register('stock', { required: true })}
                      label="Stock"
                      variant="standard"
                    />{' '}
                  </Grid>

                  <Grid item xs={12}>
                    <div className="formInput">
                      <button>Send</button>
                    </div>
                  </Grid>
                </Grid>
              </Box>

              {/* <div className="formInput">
							<label htmlFor="file">
								Iamge: <DriveFolderUploadOutlinedIcon />
							</label>
							<input
								type="file"
								id="file"
								onChange={(e) => setFile(e.target.files[0])}
								style={{ display: "none" }}
							/>
						</div>
						<div className="formInput">
							<label>Name</label>
							<input {...register("name", { required: true })} />
						</div>
						{errors.name && <span>Name is required</span>}
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
						</div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
