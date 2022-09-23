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
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from './Sidebar.module.css';
import Profile from './Profile';

export default function Sidebar() {
  const [menuOne, setMenuOne] = useState(false);
  const [menuTwo, setMenuTwo] = useState(false);
  const [menuThree, setMenuThree] = useState(false);
  const [menuFour, setMenuFour] = useState(false);

  const blueprintsMenu = () => {
    setMenuOne(!menuOne);
  };
  const dashboardMenu = () => {
    setMenuTwo(!menuTwo);
  };
  const dataDisplayMenu = () => {
    setMenuThree(!menuThree);
  };
  const applicationsMenu = () => {
    setMenuFour(!menuFour);
  };
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
        <Box>{/*logo*/}</Box>
        <Divider className={styles.divider} />
        <Profile />
        <Divider className={styles.divider} />
        <Box>
          <List
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
              <ListSubheader id='nested-list-subheader'>GENERAL</ListSubheader>
            }
          >
            <ListItemButton onClick={blueprintsMenu.bind()}>
              <ListItemText primary='Blueprints' />
              {menuOne ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={menuOne} timeout='auto' unmountOnExit>
              <ListItem>
                <ListItemText primary='Menu 1' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Menu 2' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Menu 3' />
              </ListItem>
            </Collapse>
            <ListItemButton onClick={dashboardMenu}>
              <ListItemText primary='Dashboards' />
              {menuTwo ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={menuTwo} timeout='auto' unmountOnExit>
              <ListItem>
                <ListItemText primary='Menu 1' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Menu 2' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Menu 3' />
              </ListItem>
            </Collapse>
            <ListItemButton onClick={dataDisplayMenu}>
              <ListItemText primary='Data Display' />
              {menuThree ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={menuThree} timeout='auto' unmountOnExit>
              <ListItem>
                <ListItemText primary='Menu 1' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Menu 2' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Menu 3' />
              </ListItem>
            </Collapse>
            <ListItemButton onClick={applicationsMenu}>
              <ListItemText primary='Applications' />
              {menuFour ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={menuFour} timeout='auto' unmountOnExit>
              <ListItem>
                <ListItemText primary='Menu 1' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Menu 2' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Menu 3' />
              </ListItem>
            </Collapse>
            <ListItem>
              <ListItemText primary='Menu 5' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Menu 6' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Menu 7' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Menu 8' />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
