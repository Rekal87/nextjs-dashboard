import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { Box } from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export default function Management() {
  const [menuOne, setMenuOne] = useState(false);
  const [menuThree, setMenuThree] = useState(false);
  const [menuFour, setMenuFour] = useState(false);

  const blueprintsMenu = () => {
    setMenuOne(!menuOne);
  };
  const dataDisplayMenu = () => {
    setMenuThree(!menuThree);
  };
  const applicationsMenu = () => {
    setMenuFour(!menuFour);
  };
  return (
    <Box>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader id='nested-list-subheader'>MANAGEMENT</ListSubheader>
        }
      >
        <ListItemButton onClick={blueprintsMenu.bind()}>
          <ListItemText primary='Users' />
          {menuOne ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={menuOne} timeout='auto' unmountOnExit>
          <ListItem>
            <ListItemText primary='List' />
          </ListItem>
          <ListItem>
            <ListItemText primary='User Profile' />
          </ListItem>
        </Collapse>
        <ListItem>
          <ListItemText primary='Projects' />
        </ListItem>
        <ListItemButton onClick={dataDisplayMenu}>
          <ListItemText primary='Commerce' />
          {menuThree ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={menuThree} timeout='auto' unmountOnExit>
          <ListItem>
            <ListItemText primary='Shop' />
          </ListItem>
          <ListItem>
            <ListItemText primary='List' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Details' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Create' />
          </ListItem>
        </Collapse>
        <ListItemButton onClick={applicationsMenu}>
          <ListItemText primary='Invoices' />
          {menuFour ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={menuFour} timeout='auto' unmountOnExit>
          <ListItem>
            <ListItemText primary='List' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Details' />
          </ListItem>
        </Collapse>
      </List>
    </Box>
  );
}
