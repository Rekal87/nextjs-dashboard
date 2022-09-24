import { Card, Box, Typography, Avatar } from '@mui/material';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        border: 'none',
      }}
      variant='outlined'
    >
      <Box className={styles.img}>
        <Avatar
          alt='Randy Smith'
          src='https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant='h6'>Randy Smith</Typography>
        <Typography variant='subtitle1'>Lead Developer</Typography>
      </Box>
    </Card>
  );
}
