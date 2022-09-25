import * as React from 'react';
import styles from './Chart.module.css';
import { Paper, Box } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function ChartSmall() {
  return (
    <Box className={styles.graphBox}>
      <Paper
        className={styles.success}
        sx={{ borderRadius: 2, p: 2, minWidth: 300 }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          <ExpandLessIcon
            sx={{
              color: 'success.light',
            }}
          />
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.light',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
      </Paper>
    </Box>
  );
}
