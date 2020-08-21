import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Constants from './Constants';
import FileSizeService from './fileSizeService';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  navBar: {
    backgroundColor: '#222'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '100%', 
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function ImageCompare() {
  const classes = useStyles();
  const fileSizeService = new FileSizeService();
  const getSize = (url, id) => {
    fileSizeService.getFilesize(url,  (size) => {
      document.getElementById(id).innerHTML = `Size: ${size}`;
    });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <AppBar position="relative" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Crate Image Quality Comparison
          </Typography>
        </Toolbar>
      </AppBar>
      {/* End Header */}
      <main>
        <Container className={classes.cardGrid} maxWidth="1500px">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Constants.images.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${image.url}&wid=${image.widHi}&hei=${image.widHi}&fmt=${image.format}&qlt=${image.quality}`}
                  />
                  <CardContent className={classes.cardContent}>
                      <p>Quality: {image.quality}%</p>
                      <p id={`Size${index}`}>Size: {getSize(`${image.url}&wid=${image.widHi}&hei=${image.widHi}&fmt=${image.format}&qlt=${image.quality}`, `Size${index}`)}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}