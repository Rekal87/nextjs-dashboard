import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

export default function PageTitle() {
  return (
    <>
      <Box>
        <Typography variant='h1' p={4}>
          Welcome -
        </Typography>
      </Box>

      <Box>
        <Grid
          container
          sx={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <Grid xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                height='140'
                image='https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100&q=60'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                height='140'
                image='https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100&q=60'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                height='140'
                image='https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100&q=60'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
