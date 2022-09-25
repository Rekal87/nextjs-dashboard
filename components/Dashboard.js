import { Box, Grid, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { dataset1, dataset2 } from '../mock-data';
import DataCardBig from './DataCardBig';
import DataCardSmall from './DataCardSmall';
import DataCardSmallX from './DataCardSmallX';

const DataCard = dynamic(() => import('./DataCard'), { ssr: false });

export default function Dashboard() {
  return (
    <>
      <Box>
        <Typography variant='h1' p={4}>
          Something Something Welcome
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={3} sx={{ display: 'flex' }}>
          <DataCard number={789} chartOptions={dataset1} />
          <DataCard number={576} chartOptions={dataset2} />
          <DataCard number={`183,954`} chartOptions={dataset1} />
          <DataCard number={`$13,253`} chartOptions={dataset1} />
        </Grid>
        <Grid container spacing={3}>
          <DataCardBig />
          <DataCardSmall />
          <DataCardSmallX />
        </Grid>
      </Box>
    </>
  );
}
