import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import NewCategory from '../../components/catogery/newCategory/NewCategory';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './New.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const REGISTER_URL = 'http://localhost:3000/api/v1/users/signup';

const New = ({ title, input }) => {
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post(REGISTER_URL, data);
    console.log(response);
    console.log(response?.data);
    navigate('/users', { replace: true });
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=''
            />
          </div>
          <div className='right'>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            {/* ********************************************************************************************************* */}
            <NewCategory setFile={setFile} />
            {/* <Box sx={{ flexGrow: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <label htmlFor='file'>
                      Iamge: <PhotoCamera />
                    </label>
                    <input
                      type='file'
                      id='file'
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: 'none' }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='Username'
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='Name and surname'
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='Email'
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='Phone'
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='Country'
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='City'
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='Zip code'
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl
                      sx={{ m: 1, width: '25ch' }}
                      variant='standard'
                    >
                      <InputLabel htmlFor='standard-adornment-password'>
                        Password
                      </InputLabel>
                      <Input
                        id='standard-adornment-password'
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='Address'
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ m: 1, width: '75%' }}
                      id='outlined-basic'
                      label='Outlined'
                      variant='standard'
                      error={true}
                      helperText={'' === '' ? 'Empty field!' : ' '}
                    />{' '}
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl
                      variant='standard'
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id='demo-simple-select-standard-label'>
                        Roul
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-standard-label'
                        id='demo-simple-select-standard'
                        value={'Mustafa'}
                        label='Age'
                      >
                        <MenuItem value={'user'}>user</MenuItem>
                        <MenuItem value={'seller'}>seller</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <div className='formInput'>
                      <button>Send</button>
                    </div>
                  </Grid>
                </Grid>
              </Box> */}
            {/* ********************************************************************************************************* */}
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
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
