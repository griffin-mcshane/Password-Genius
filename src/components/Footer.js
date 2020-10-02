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
    minHeight: 100,
  },
  scartist: {
    color: 'white'
  },
  scalbum: {
    color: 'white'
  },
  scpos: {
    marginBottom: 12,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
      <Box width={1} justifyContent="center" className={classes.scroot} p={2}>
      <Typography variant="body2" align="center" className={classes.scartist}>
          Data from Genius API
        </Typography>
        <Typography variant="body1" align="center" className={classes.scartist}>
          Created by Griffin McShane.
        </Typography>
        <Typography variant="body2" align="center" className={classes.scartist}>
          Special Thanks to ZWillGen.
        </Typography>
      </Box>
  );
}