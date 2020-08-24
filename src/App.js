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
  const getSizeOne = (url, sizeId) => {
    fileSizeService.getFilesize(url,  (size) => {
      document.getElementById(sizeId).innerHTML = `1x Size: ${size}`;
    });
  }

  const getSizeTwo = (url, sizeId) => {
    fileSizeService.getFilesize(url,  (size) => {
      document.getElementById(sizeId).innerHTML = `2x Size: ${size}`;
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
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Constants.images.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>

                  <img id={`image${index}`} className="card-set" srcSet={`${image.url}&wid=${image.widHiOne}&hei=${image.widHiOne}&fmt=${image.format}&qlt=${image.quality} 1x, 
                  ${image.url}&wid=${image.widHiTwo}&hei=${image.widHiTwo}&fmt=${image.format}&qlt=${image.quality} 2x`} alt="images of stuff"/>

                  <CardContent className={classes.cardContent}>
                      <p>Quality: {image.quality}%</p>
                      <p id={`Size1${index}`}>Size: {getSizeOne(`${image.url}&wid=${image.widHiOne}&hei=${image.widHiOne}&fmt=${image.format}&qlt=${image.quality}`, `Size1${index}`, `image${index}`)}</p>
                      <p id={`Size2${index}`}>Size: {getSizeTwo(`${image.url}&wid=${image.widHiTwo}&hei=${image.widHiTwo}&fmt=${image.format}&qlt=${image.quality}`, `Size2${index}`, `image${index}`)}</p>

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