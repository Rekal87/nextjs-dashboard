import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from './Sidebar.module.css';

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
      <Container>
        <Box className={styles.menu}>
          <Box>{/*logo*/}</Box>
          <Box>{/*user loggedin*/}</Box>
          <Box>
            <List
              subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                  GENERAL
                </ListSubheader>
              }
            >
              <ListItemButton onClick={blueprintsMenu.bind()}>
                <ListItemText primary='Blueprints' />
                {menuOne ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={menuOne} timeout='auto' unmountOnExit>
                <ListItemText primary='Menu 1' />
                <ListItemText primary='Menu 2' />
                <ListItemText primary='Menu 3' />
              </Collapse>
              <ListItemButton onClick={dashboardMenu}>
                <ListItemText primary='Dashboards' />
                {menuTwo ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={menuTwo} timeout='auto' unmountOnExit>
                <ListItemText primary='Menu 1' />
                <ListItemText primary='Menu 2' />
                <ListItemText primary='Menu 3' />
              </Collapse>
              <ListItemButton onClick={dataDisplayMenu}>
                <ListItemText primary='Data Display' />
                {menuThree ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={menuThree} timeout='auto' unmountOnExit>
                <ListItemText primary='Menu 1' />
                <ListItemText primary='Menu 2' />
                <ListItemText primary='Menu 3' />
              </Collapse>
              <ListItemButton onClick={applicationsMenu}>
                <ListItemText primary='Applications' />
                {menuFour ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={menuFour} timeout='auto' unmountOnExit>
                <ListItemText primary='Menu 1' />
                <ListItemText primary='Menu 2' />
                <ListItemText primary='Menu 3' />
              </Collapse>
              <ListItemText primary='Menu 5' />
              <ListItemText primary='Menu 6' />
              <ListItemText primary='Menu 7' />
              <ListItemText primary='Menu 8' />
            </List>
          </Box>
        </Box>
      </Container>
    </>
  );
}
