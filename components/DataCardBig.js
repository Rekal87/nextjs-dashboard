import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import styles from './DataCard.module.css';

export default function DataCardBig() {
  return (
    <Grid className={styles.graphBox} xs={6}>
      <Paper sx={{ maxWidth: 1221, borderRadius: '10px' }}>
        <Box>
          <Box
            className={styles.bigBox}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box>
              <Typography className={styles.bigBoxTitle} variant='subtitle2'>
                PROGRESS
              </Typography>
              <Typography className={styles.bigBoxSubTitle} variant='h6'>
                Users Analytics
              </Typography>
            </Box>
            <Box>
              <Chip label='Pending' />
            </Box>
          </Box>
          <Box>
            <Divider />
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
                </ListItemAvatar>
                <ListItemText
                  primary='Brunch this weekend?'
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </>
                  }
                />
                <Button>View</Button>
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    alt='Travis Howard'
                    src='/static/images/avatar/2.jpg'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Summer BBQ'
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </>
                  }
                />
                <Button>View</Button>
              </ListItem>
              <Divider variant='inset' component='li' />
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
                </ListItemAvatar>
                <ListItemText
                  primary='Oui Oui'
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        Sandra Adams
                      </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </>
                  }
                />
                <Button>View</Button>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
