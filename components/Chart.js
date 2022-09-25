import { Box, Paper, Typography, Button, Grid } from '@mui/material';
import styles from './Chart.module.css';

export default function Chart(props) {
  return (
    <Grid className={styles.graphBox} xs={3}>
      <Paper
        sx={{
          maxWidth: 580,
          padding: '27px',
          borderRadius: '10px',
        }}
      >
        {props.color}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography className={styles.cssH1} variant='h1'>
              {props.number}
            </Typography>
            <Typography className={styles.cssSubtitle} variant='subtitle2'>
              Total Orders
            </Typography>
          </Box>

          <Button variant='outlined' size='small'>
            VIEW ALL
          </Button>
        </Box>
        <Box>Charts</Box>
      </Paper>
    </Grid>
  );
}
