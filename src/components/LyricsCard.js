import React, {useContext} from 'react';
import AppContext from "../context/index";
//Material-UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//Components
import BlankSpace from './BlankSpace';
//Styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 600,
    minHeight: 100,
    flex: 'wrap',
  },
  pos: {
    marginBottom: 12,
  },
  sectionheaders:{
    margin: "45px 30px 45px 30px",
    color: "#9a9a9a",
    fontSize: ".75rem",
    letterSpacing: ".04em",
    fontWeight: 400,
  },
  lyricsOut: {
    fontWeight: 100,
    wordBreak: "break-word",
    lineHeight: "1.7em",
    fontStyle: "italic",
  },
  passwordOut: {
    fontSize: "1rem",
    fontWeight: 400,
    lineJeight: 1,
    letterSpacing: "1px",
    fontStyle: "bold",
  },
});

export default function SongCard() {
  const classes = useStyles();

  const appContext = useContext(AppContext);
  const {password, lyrics} = appContext;

  return (
    <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="center"
  overflow="hidden"
>
    <Grid item>
    <Card className={classes.root}>
    <Typography variant="overline" className={classes.sectionheaders}>
        Lyrics
      </Typography>
      <CardContent>
    <Typography variant="body1" className={classes.lyricsOut}>{lyrics}</Typography>
      </CardContent>
      <CardActions className={classes.pos} />
    </Card>
    </Grid>
    <BlankSpace />
    <Grid item>
    <Card className={classes.root}>
    <Typography variant="overline" className={classes.sectionheaders}>
        Password
      </Typography>
      <CardContent>
       <Typography variant="body1" className={classes.passwordOut}>{password}</Typography>
      </CardContent>
      <CardActions className={classes.pos} />
    </Card>
    </Grid>
    </Grid>
  );
}