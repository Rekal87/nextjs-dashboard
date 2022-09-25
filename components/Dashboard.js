import { Box, Grid, Typography } from '@mui/material';
import Chart from './Chart';
import ChartBig from './ChartBig';
import ChartSmall from './ChartSmall';
import ChartSmallX from './ChartSmallX';

export default function Dashboard() {
  return (
    <>
      <Box>
        <Typography variant='h1' p={4}>
          Something Welcome
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={3} sx={{ display: 'flex' }}>
          <Chart number={789} />
          <Chart number={576} />
          <Chart number={`183,954`} />
          <Chart number={`$13,253`} />
        </Grid>
        <Grid container spacing={3}>
          <ChartBig />
          <ChartSmall />
          <ChartSmallX />
        </Grid>
      </Box>
    </>
  );
}
