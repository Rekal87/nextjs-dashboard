import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styles from './Sidebar.module.css';
import Profile from './Profile';
import Image from 'next/image';
import logo from '/public/images/logo.png';
import General from './menu/General';
import Management from './menu/Managment';

export default function Sidebar() {
  return (
    <>
      <Drawer
        sx={{
          width: 290,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 290,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Box className={styles.img}>
          <Image width={160} height={100} alt='logo' src={logo} />
        </Box>
        <Divider className={styles.divider} />
        <Profile />
        <Divider className={styles.divider} />

        <General />
        <Management />
      </Drawer>
    </>
  );
}
