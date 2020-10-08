import React, {useContext, useRef} from 'react';
import AppContext from "../context/index";
//Material-UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
//Styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  scroot: {
    backgroundColor: 'black',
  },
  grid:{
    paddingTop: 10,
    paddingBottom: 10
  },
  songTitle: {
    lineHeight: 1.125,
    fontWeight: 700,
    wordBreak: "break-word",
  },
  artistTitle: {
    lineHeight: 1.45,
    fontWeight: 700,
    color: 'white', 
  },
});

export default function SongCard() {
  const classes = useStyles();

  const appContext = useContext(AppContext);
  const {
    cAlbumArt,
    setOpen,
    albumArt,
    music,
    musician
  } = appContext;
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Paper className={classes.scroot}>
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={3}
  className={classes.grid}
>
  <Grid item>
        <img src={albumArt} alt="" width={175} height={175}/>
        </Grid>
        <Grid item>
        <Typography variant="h4" color="primary" className={classes.songTitle}>
          {music}
        </Typography>
        <Typography variant="h6" className={classes.artistTitle}>
          {musician}
        </Typography>
        <Button color="primary" onClick={handleClickOpen}>Choose Song</Button>
        </Grid>
        </Grid> 
    </Paper>
  );
}