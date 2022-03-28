import React, { useState } from 'react';
import './edite.scss';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const EditeCategory = ({ setFile }) => {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setFile(data.file[0]);
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

export default EditeCategory;
