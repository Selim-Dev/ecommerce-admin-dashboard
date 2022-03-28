import React, { useState } from 'react';
import axios from 'axios';
import './new.scss';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const NewCategory = ({ setFile }) => {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const image = await setFile(data.file[0]);
      setImg(image);
      setName(data.name);
      const mok = {
        name,
        img,
      };
      const formData = new FormData();
      formData.append('photo', data.file[0]);
      formData.append('name', data.name);
      const result = await axios.post(
        'http://localhost:3000/api/v1/category/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDExOGJkZDM5ODg5MjBjODc0ZjUyMCIsImlhdCI6MTY0ODQ3NDcyMywiZXhwIjoxNjU2MjUwNzIzfQ.aavNeediEDxtYFF0gnX0WX9ymthnENqRNT0x8hnn2Zc'}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={2}
          >
            <Grid item xs={6}>
              <div className='normal'>
                <label htmlFor='file'>
                  Iamge: <PhotoCamera />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => setImg(e.target.files[0])}
                  {...register('file')}
                  style={{ display: 'none' }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ m: 1, width: '75%' }}
                id='outlined-basic'
                label='Username'
                variant='standard'
                error={errors.name}
                {...register('name', {
                  required: true,
                  pattern: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gimsuy,
                })}
                helperText={errors.name ? 'This field is required' : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <Button type='submit' variant='contained'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default NewCategory;
