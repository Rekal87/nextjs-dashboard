import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Paper } from '@mui/material';
import * as React from 'react';
import styles from './DataCard.module.css';

export default function DataCardSmallX() {
  return (
    <Box className={styles.graphBox}>
      <Paper
        className={styles.failure}
        sx={{ borderRadius: 2, p: 2, minWidth: 300 }}
      >
        <Box sx={{ color: 'text.secondary' }}>Subscriptions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          <RemoveIcon
            sx={{
              color: '#ff1943',
            }}
          />
          545
        </Box>
        <Box
          sx={{
            color: '#ff1943',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          -8.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
      </Paper>
    </Box>
  );
}
