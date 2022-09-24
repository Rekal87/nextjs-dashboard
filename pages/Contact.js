import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Container>
        <div className='wrapper'>
          <Paper>
            <Box p={3}>
              <Box sx={{ m: 3 }}>
                <Typography variant='h3'>Contact us</Typography>
                <Typography>
                  Fill out the form and our team will get back to you within 24
                  hours.
                </Typography>
              </Box>

              <Box
                sx={{ display: 'flex', flexWrap: 'wrap' }}
                component='form'
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                <TextField
                  sx={{ m: 3, width: '45%' }}
                  required
                  label='First Name'
                  {...register('firstName')}
                />
                <TextField
                  sx={{ m: 3, width: '45%' }}
                  required
                  label='Last Name'
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && <p>Last name is required.</p>}
                <TextField
                  m={3}
                  required
                  label='Email'
                  fullWidth
                  {...register('email', { pattern: /\d+/ })}
                  sx={{ m: 3 }}
                />
                <TextField
                  label='Phone Number'
                  fullWidth
                  {...register('age', { pattern: /\d+/ })}
                  sx={{ m: 3 }}
                />
                <TextField
                  label='Message'
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ m: 3 }}
                />

                <Button
                  sx={{ m: 3 }}
                  fullWidth
                  variant='contained'
                  type='submit'
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </div>
      </Container>
    </>
  );
}
