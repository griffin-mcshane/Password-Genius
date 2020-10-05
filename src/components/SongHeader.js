import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppContext from "../context/index";
const useStyles = makeStyles({
//SongCard (sc) Styles
  scroot: {
    minWidth: 275,
    backgroundColor: 'black',
  },
  scalbum: {
    color: 'white'
  },
  scpos: {
    marginBottom: 12,
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
    title,
    artist,
    loading,
    setLoading,
    open,
    setOpen,
    music,
    musician,
    songLyrics
  } = appContext;
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Card className={classes.scroot}>
      <CardContent>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
        >
            <Grid item>
        <Box
            display="flex" 
            width={200} height={200} 
            bgcolor="white"
            ml={50}
            mr={4}
        >
          <img src={cAlbumArt} alt="" alt="" width={200} height={200}/>
        </Box>
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
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}