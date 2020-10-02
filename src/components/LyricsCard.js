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
import BlankSpace from './BlankSpace'
const useStyles = makeStyles({
//SongCard (sc) Styles
  scroot: {
    width: 800,
    minHeight: 100,
    flex: 'wrap',
  },
  scpos: {
    marginBottom: 12,
  },
});

export default function SongCard() {
  const classes = useStyles();

  const appContext = useContext(AppContext);
  const {
    albumArt,
    title,
    artist,
    loading,
    setLoading,
    open,
    setOpen,
    music,
    musician,
    password,
    songLyrics,
  } = appContext;

  return (
    <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="center"
  overflow="hidden"
>
    <Grid item>
    <Card className={classes.scroot}>
    <Typography variant="overline" color="textSecondary" gutterBottom>
        Lyrics
      </Typography>
      <CardContent>
      <Typography variant="body1">{songLyrics}</Typography>
      </CardContent>
      <CardActions className={classes.scpos} />
    </Card>
    </Grid>
    <BlankSpace />
    <Grid item>
    <Card className={classes.scroot}>
    <Typography variant="overline" color="textSecondary" gutterBottom>
        Password
      </Typography>
      <CardContent>
       <Typography variant="body1">{password}</Typography>
      </CardContent>
      <CardActions className={classes.scpos} />
    </Card>
    </Grid>
    </Grid>
  );
}